import { FastifyInstance } from "fastify"
import { promptRoutes } from './prompt'

export const v1Routes = async (app: FastifyInstance) => {
  app.register(promptRoutes, { prefix: 'prompts' })
}