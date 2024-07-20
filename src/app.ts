import Fastify from "fastify";
import responsePlugin from "@/plugins/responsePlugin.js";
import routes from "@/routes/index.js";



export async function startServer() {
    const fastify = Fastify({});

    fastify.register(responsePlugin);
    fastify.register(routes);

    try {
        const address = await fastify.listen({ port: 8080 });
        console.log(`Server listening at ${address}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}