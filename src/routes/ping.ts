import { FastifyPluginAsync, type FastifyRequest } from "fastify";

const pingRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get("/ping", async (request: FastifyRequest, reply) => {
    reply.sendSuccess("pong");
  });
};

export default pingRoutes;
