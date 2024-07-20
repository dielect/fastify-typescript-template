import fp from "fastify-plugin";
import { FastifyPluginAsync, FastifyReply, FastifyError } from "fastify";

const responsePlugin: FastifyPluginAsync = fp(async (fastify, options) => {
  fastify.decorateReply(
    "sendSuccess",
    function (this: FastifyReply, data: any): void {
      this.send({
        code: 200,
        success: true,
        data: data,
      });
    },
  );

  fastify.setErrorHandler((error: FastifyError, request, reply) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || "Internal Server Error";

    reply.status(statusCode).send({
      code: statusCode,
      success: false,
      message: message,
    });
  });
});

export default responsePlugin;
