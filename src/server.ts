import { fastify } from "fastify";
import { v1Routes } from "./api/v1/routes";
import fastifyCors from "@fastify/cors";

const app = fastify()

app
  .register(fastifyCors, { origin: '*' })
  .register(v1Routes, { prefix: '/v1' })
  .listen({ port: 3333 })
  .then(() => console.log('HTTP server listening on port 3333'))
  