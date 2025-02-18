import { type QueryResolvers as IQuery } from "./generated/graphql";
import { Context } from "./context";

export const Query: IQuery<Context> = {
  hello: () => "world",

  
  getAllTodos: async (_: any, __: any, { prisma }: Context) => {
    return await prisma.todo.findMany();
  },


  getTodoById: async (_: any, args: { id: string }, { prisma }: Context) => {
    return await prisma.todo.findUnique({
      where: {
        id: args.id,
      },
    });
  },


  getCompletedTodos: async (_: any, __: any, { prisma }: Context) => {
    return await prisma.todo.findMany({
      where: {
        completed: true,
      },
    });
  },


  getIncompleteTodos: async (_: any, __: any, { prisma }: Context) => {
    return await prisma.todo.findMany({
      where: {
        completed: false,
      },
    });
  },
};
