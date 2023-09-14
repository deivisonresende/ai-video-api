import { GenerateTranscriptionCompletionUseCase } from './useCase'
import { FastifyRequest } from 'fastify'
import { z } from 'zod'

export class GenerateTranscriptionController {
  static async handle(request: FastifyRequest) {
    const { params, body } = request

    const paramsSchema = z.object({ videoId: z.string().uuid() })

    const bodySchema = z.object({
      template: z.string(),
      temperature: z.number().min(0).max(1).default(0.5)
    })

    const { videoId } = paramsSchema.parse(params)
    const { template, temperature } = bodySchema.parse(body)

    return await GenerateTranscriptionCompletionUseCase.execute({ videoId, template, temperature })
  }
}
