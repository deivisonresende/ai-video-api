import { FastifyReply, FastifyRequest } from 'fastify'

import { GenerateTranscriptionCompletionUseCase } from './useCase'
import { streamToResponse } from "ai"
import { z } from 'zod'

export class GenerateTranscriptionController {
  static async handle(request: FastifyRequest, reply: FastifyReply) {
    const { body } = request
    console.log(body)

    const bodySchema = z.object({
      prompt: z.string(),
      videoId: z.string().uuid(),
      temperature: z.number().min(0).max(1).default(0.5),
    })

    const { prompt, videoId, temperature } = bodySchema.parse(body)

    const stream = await GenerateTranscriptionCompletionUseCase.execute({
      videoId,
      prompt,
      temperature
    })

    streamToResponse(stream, reply.raw, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST'
      }
    })
  }
}
