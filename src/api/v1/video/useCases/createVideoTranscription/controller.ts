import { FastifyRequest } from 'fastify'
import { z } from 'zod'
import { CreateVideoTranscriptionUseCase } from './useCase'

export class CreateVideoTranscriptionController {
  static async handle(request: FastifyRequest) {
    const { params, body } = request

    const paramsSchema = z.object({ videoId: z.string().uuid() })

    const bodySchema = z.object({ prompt: z.string() })

    const { videoId } = paramsSchema.parse(params)
    const { prompt } = bodySchema.parse(body)

    return await CreateVideoTranscriptionUseCase.execute({ videoId, prompt })
  }
}
