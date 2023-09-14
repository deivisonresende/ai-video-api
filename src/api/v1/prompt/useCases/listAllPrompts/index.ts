import { FastifyInstance } from "fastify"
import { ListAllPromptsController } from "./controller"

export const listAllPromptsRoute = async (app: FastifyInstance) => {
  app.get('/', ListAllPromptsController.handle)
}