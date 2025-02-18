import "reflect-metadata";
import { Router } from "express";
import { createYoga, createSchema, useExtendContext } from "graphql-yoga";
import { typeDefs } from "./typeDefinitions";
import { PrismaClient } from "@prisma/client";
import { Query } from "./query";
import { Mutation } from "./mutation";


// Note that we can probably use our own custom scalar for Date. 
// I don't know if there are performance/logical drawbacks to this.
// Definitely worth exploring, but I'll use this for now. 
import GraphQLJSON from 'graphql-type-json';

const prisma = new PrismaClient();

const yogaPublicRouter = Router();

const schema = createSchema({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Date: GraphQLJSON,
  },
});

const yoga = createYoga({
  schema,
  graphiql: true,
  healthCheckEndpoint: "/health",
  landingPage: false,
  logging: true,
  plugins: [
    useExtendContext(async (ctx) => {
      return {
        ...ctx,
        prisma: prisma,
      };
    }),
  ],
});
yogaPublicRouter.use(yoga);

export { yogaPublicRouter, yoga as yogaPublic };
