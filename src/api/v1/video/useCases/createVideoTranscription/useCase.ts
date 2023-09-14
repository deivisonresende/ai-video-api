import { FsProvider } from "../../../../../helpers/fs"
import { openai } from "../../../../../lib/openai"
import { db } from "../../../../../lib/prisma"

export class CreateVideoTranscriptionUseCase {
  static async execute({ videoId, prompt }: { videoId: string, prompt: string }) {

    // const video = await db.video.findUniqueOrThrow({
    //   where: { id: videoId }
    // })

    // const videoStream = FsProvider.readFileFromDisk({ path: video.path })

    // const response = await openai.audio.transcriptions.create({
    //   file: videoStream,
    //   model: 'whisper-1',
    //   language: 'pt',
    //   response_format: 'json',
    //   temperature: 0,
    //   prompt
    // })

    const transcript = 'mock de transcrição'

    await db.video.update({
      where: {
        id: videoId,
      },
      data: {
        transcript,
      }
    })

    return { transcript }
  }
}
