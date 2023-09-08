import 'reflect-metadata'
import { buildSchema } from "type-graphql"

import UserResolver from "./user/user.module"

(async function main() {
    const schema = await buildSchema({
        resolvers: [UserResolver],
        emitSchemaFile: true
    });
})()