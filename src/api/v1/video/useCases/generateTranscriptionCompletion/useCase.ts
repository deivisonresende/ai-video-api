import { OpenAIStream } from "ai"
import { db } from "../../../../../lib/prisma"
import { openai } from "../../../../../lib/openai"

export class GenerateTranscriptionCompletionUseCase {
  static async execute({ videoId, template, temperature }:
    { videoId: string, template: string, temperature: number }) {

    const video = await db.video.findUniqueOrThrow({
      where: { id: videoId, transcript: { not: null } }
    })

    const promptMessage = template.replace("{transcription}", video.transcript as string)

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-16k',
      temperature,
      messages: [ { role: 'user', content: promptMessage }],
      stream: true
    })

    return OpenAIStream(response)
  }
}