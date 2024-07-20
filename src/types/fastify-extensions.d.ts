import 'fastify'

declare module 'fastify' {
    interface FastifyReply {
        sendSuccess( data:any): void;
    }
}