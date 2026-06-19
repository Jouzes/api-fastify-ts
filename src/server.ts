import fastify from "fastify";
import { env } from "./env/index.js";

const app = fastify();

app.listen({port: env.PORT},  () =>{
    console.log('Server is running on port', env.PORT)
})