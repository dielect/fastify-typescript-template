import {FastifyInstance} from "fastify";
import pingRoutes from "@/routes/ping.js";


const routes = async (fastify:FastifyInstance) => {
    fastify.register(pingRoutes, { prefix: '' });
    // 注册其他路由模块...
};

export default routes;