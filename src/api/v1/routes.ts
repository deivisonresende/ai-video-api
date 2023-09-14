import { FastifyInstance } from "fastify"
import { promptRoutes } from './prompt'
import { videoRoutes } from "./video"

export const v1Routes = async (app: FastifyInstance) => {
  app.register(promptRoutes, { prefix: 'prompts' })
  app.register(videoRoutes, { prefix: 'videos' })
}