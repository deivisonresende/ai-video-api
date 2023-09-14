import { FastifyInstance } from "fastify"
import { uploadVideoRoute } from './useCases/uploadVideo'
import { createVideoTranscriptionRoute } from "./useCases/createVideoTranscription"
import { generateTranscriptionCompletionRoute } from "./useCases/generateTranscriptionCompletion"

export const videoRoutes = async (app: FastifyInstance) => {
  app.register(uploadVideoRoute)
  app.register(createVideoTranscriptionRoute)
  app.register(generateTranscriptionCompletionRoute)
}