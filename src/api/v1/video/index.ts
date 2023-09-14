import { FastifyInstance } from "fastify"
import { uploadVideoRoute } from './useCases/uploadVideo'
import { createVideoTranscriptionRoute } from "./useCases/createVideoTranscription"

export const videoRoutes = async (app: FastifyInstance) => {
  app.register(uploadVideoRoute)
  app.register(createVideoTranscriptionRoute)
}