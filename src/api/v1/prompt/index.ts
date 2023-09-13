import { FastifyInstance } from "fastify"
import { listAllPromptsRoute } from './useCases/listAllPrompts'

export const promptRoutes = async (app: FastifyInstance) => {
  app.register(listAllPromptsRoute)
}