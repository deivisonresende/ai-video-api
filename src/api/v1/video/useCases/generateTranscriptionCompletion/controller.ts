import { FastifyReply, FastifyRequest } from 'fastify'

import { GenerateTranscriptionCompletionUseCase } from './useCase'
import { streamToResponse } from "ai"
import { z } from 'zod'

export class GenerateTranscriptionController {
  static async handle(request: FastifyRequest, reply: FastifyReply) {
    const { params, body } = request

    const paramsSchema = z.object({ videoId: z.string().uuid() })

    const bodySchema = z.object({
      template: z.string(),
      temperature: z.number().min(0).max(1).default(0.5)
    })

    const { videoId } = paramsSchema.parse(params)
    const { template, temperature } = bodySchema.parse(body)

    const stream = await GenerateTranscriptionCompletionUseCase.execute({
      videoId,
      template,
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
