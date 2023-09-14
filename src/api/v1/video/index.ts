import { FastifyInstance } from "fastify"
import { uploadVideoRoute } from './useCases/uploadVideo'

export const videoRoutes = async (app: FastifyInstance) => {
  app.register(uploadVideoRoute)
}