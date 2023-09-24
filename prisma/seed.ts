import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const count = await prisma.prompt.count()
  if (!count) {

    const prompts = [
      {
        title: 'Título YouTube',
        template: YT_TITLE_TEMPLATE
      },
      {
        title: 'Descrição YouTube',
        template: YT_DESCRIPTION_TEMPLATE
      }
    ]

    await Promise.all(prompts.map(async data => await prisma.prompt.create({ data })))
  }
}

export const seed = async () => main()
  .then(async () => await prisma.$disconnect())
  .catch(async _error => await prisma.$disconnect())

const YT_DESCRIPTION_TEMPLATE = `Seu papel é gerar uma descrição sucinta para um vídeo do YouTube.
    
  Abaixo você receberá uma transcrição desse vídeo, use essa transcrição para gerar a descrição.
  
  A descrição deve possuir no máximo 80 palavras em primeira pessoa contendo os pontos principais do vídeo.
  
  Use palavras chamativas e que cativam a atenção de quem está lendo.
  
  Além disso, no final da descrição inclua uma lista de 3 até 10 hashtags em letra minúscula contendo palavras-chave do vídeo.
  
  O retorno deve seguir o seguinte formato:
  '''
  Descrição.
  
  #hashtag1 #hashtag2 #hashtag3 ...
  '''
  
  Transcrição:
  '''
  {transcription}
  '''`.trim()


const YT_TITLE_TEMPLATE = `Seu papel é gerar três títulos para um vídeo do YouTube.
  
  Abaixo você receberá uma transcrição desse vídeo, use essa transcrição para gerar os títulos.
  Abaixo você também receberá uma lista de títulos, use essa lista como referência para os títulos a serem gerados.

  Os títulos devem ter no máximo 60 caracteres.
  Os títulos devem ser chamativos e atrativos para maximizar os cliques.

  Retorne APENAS os três títulos em formato de lista como no exemplo abaixo:
  '''
  - Título 1
  - Título 2
  - Título 3
  '''

  Transcrição:
  '''
  {transcription}
  '''`.trim()