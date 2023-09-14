import { ListAllPromptsUseCase } from './useCase'

export class ListAllPromptsController {
  static async handle() {
    return await ListAllPromptsUseCase.execute()
  }
}
