
<div align="center">
  <h1 style="font-size: 40px"> ai.video api</h1>
</div>

API de uma aplicação web ([ai-video-web](https://github.com/deivisonresende/ai-video-web)) que permite aos usuários realizar diversas ações a partir de um vídeo de entrada. Utilizando um conjunto de tecnologias modernas, ela oferece funcionalidades avançadas para melhorar a eficiência na criação de conteúdo para o YouTube.


Techs
--------------------

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
[![Fastify](https://img.shields.io/badge/fastify-202020?style=for-the-badge&logo=fastify&logoColor=white)](https://fastify.io/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/)
[![SQLite](	https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)](https://www.sqlite.org/)
[![OpenAI](https://img.shields.io/badge/openai-%23412991.svg?&style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)


Recursos existentes
--------------------

Listagem de prompts: ```GET /v1/prompts``` 

Upload do áudio: ```POST /v1/videos/upload```

Gerador de transcrição através do ChatGPT-3.5: ```POST /v1/videos/:videoId/transcription```

Gerador de sugestões através do ChatGPT-3.5: ```POST /v1/videos/transcription/completion```

<br>

> Para obter os exemplos das requisições, consulte o arquivo (postman-collection)[]

Passos para execução
--------------------


1.  Clone o repositório da aplicação para o seu sistema local:

``` 
git clone https://github.com/deivisonresende/ai-video-api.git
```

2.  Navegue até o diretório da aplicação:
 ```
 cd ai-video-api
 ```

3.  Instale as dependências:

```
pnpm i
```

4. Execute a aplicação com o comando:
```
pnpm run dev
```

<br>

Projeto <code>ai.video</code> construído durante o evento NLW AI promovido pela [Rocketseat](https://www.rocketseat.com.br/) ministrado pelo [diego3g](https://github.com/diego3g)
