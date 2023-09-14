import { FastifyReply, FastifyRequest } from 'fastify'

import { UploadVideoUseCase } from './useCase'
import path from 'node:path'

export class UploadVideoController {
  static async handle(request: FastifyRequest, reply: FastifyReply) {
    const data = await request.file()

    if (!data) {
      return reply.status(400).send({ error: 'Entrada de vídeo ausente' })
    }

    const fileExtension = path.extname(data.filename)
    if (fileExtension !== '.mp3') {
      return reply.status(400).send({ error: 'A entrada dever ser do tipo MP3' })
    }

    return await UploadVideoUseCase.execute({ data, fileExtension })
  }
}
