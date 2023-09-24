import { fastify } from "fastify";
import fastifyCors from "@fastify/cors";
import { seed } from "../prisma/seed";
import { v1Routes } from "./api/v1/routes";

const app = fastify()

seed()

app
  .register(fastifyCors, { origin: '*' })
  .register(v1Routes, { prefix: '/v1' })
  .listen({ port: 3333 })
  .then(() => console.log('HTTP server listening on port 3333'))
  