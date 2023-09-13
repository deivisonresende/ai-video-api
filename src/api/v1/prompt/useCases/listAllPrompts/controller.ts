import ListAllPromptsUseCase from './useCase'

class ListAllPromptsController {
  async handle() {
    return await ListAllPromptsUseCase.execute()
  }
}

export default new ListAllPromptsController()
