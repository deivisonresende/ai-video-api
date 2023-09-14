import { db } from "../../../../../lib/prisma"

export class ListAllPromptsUseCase {
  static async execute() {
    return await db.prompt.findMany()
  }
}