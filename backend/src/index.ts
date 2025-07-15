import Fastify from 'fastify';
import dotenv from 'dotenv';

dotenv.config();

const fastify = Fastify({ logger: true });

fastify.get('/', async () => {
  return { status: 'CoreX Backend is running' };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Backend server running on http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();