import { FastifyInstance } from "fastify"
import { CreateVideoTranscriptionController } from "./controller"

export const createVideoTranscriptionRoute = async (app: FastifyInstance) => {
  app.post('/:videoId/transcription', CreateVideoTranscriptionController.handle)
}