import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const mongoUri = process.env.BETTER_AUTH_DB;

if (!mongoUri) {
  throw new Error("BETTER_AUTH_DB environment variable is not set");
}

const client = new MongoClient(mongoUri);
const db = client.db();

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    database: mongodbAdapter(db, {
        client
    })
});