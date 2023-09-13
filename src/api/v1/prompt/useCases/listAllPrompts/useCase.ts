import { db } from "../../../../../lib/prisma"

class ListAllPromptsUseCase {
  async execute() {
    return await db.prompt.findMany()
  }
}

export default new ListAllPromptsUseCase()