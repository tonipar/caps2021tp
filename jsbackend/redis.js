import redis from "redis";
import { promisify } from "util";

const { REDIS_HOST } = process.env;

const client = redis.createClient(`redis://${REDIS_HOST}`);

client.on("error", console.error);

export default client;
export const getAsync = promisify(client.get).bind(client);
export const set = client.set.bind(client);
