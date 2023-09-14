import { FastifyInstance } from "fastify"
import { UploadVideoController } from "./controller"
import { fastifyMultipart } from '@fastify/multipart'

const ONE_MB = 1_048_576
const fileSize = ONE_MB * 25 // 25mb

export const uploadVideoRoute = async (app: FastifyInstance) => {
  app.register(fastifyMultipart, { limits: { fileSize } })

  app.post('/upload', UploadVideoController.handle)
}