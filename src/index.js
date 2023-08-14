import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs, resolvers } from "./schema/index.js";
import * as jose from "jose";
import { GraphQLError } from "graphql";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req, res }) => {
    const header = req.headers.authorization || "";
    const token = header.replace("Bearer ", "")
    
    if (!token) {
      let operation = req.body.operationName;
      let operationsWithoutAuth = ["IntrospectionQuery", "Login"];

      if(!operationsWithoutAuth.includes(operation)) {
        throw new GraphQLError("User is not authenticated", {
          extensions: {
            code: "UNAUTHENTICATED",
            http: { status: 401 },
          },
        });
      }
    }
    else {
        const secret = new TextEncoder().encode("mysupersecretphrase");
        let result = await jose.jwtVerify(token, secret);
        return result.payload.user;
    }
    
  },
});

console.log(`🚀  Server ready at: ${url}`);
