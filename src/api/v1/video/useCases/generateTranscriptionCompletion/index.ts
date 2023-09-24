import { FastifyInstance } from "fastify"
import { GenerateTranscriptionController } from "./controller"

export const generateTranscriptionCompletionRoute = async (app: FastifyInstance) => {
  app.post('/transcription/completion', GenerateTranscriptionController.handle)
}