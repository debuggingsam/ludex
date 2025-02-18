import { type MutationResolvers as IMutation } from "./generated/graphql";
import { Context } from "./context";

export const Mutation: IMutation<Context> = {
  createSomething: async (_, { input }, { prisma }) => {
    const something = await prisma.something.create({
      data: {
        name: input.name,
      },
    });

    return {
      id: something.id,
      name: something.name,
    };
  },


  /* ToDo mutations start here...! */ 

  // CREATION
  createTodo: async (_, { input }, { prisma }) => {
    const newTodo = await prisma.todo.create({
      data: {
        title: input.title,
        completed: input.completed ?? false, 
      },
    });
    return newTodo;
  },

    // MARK COMPLETION via ID 
    markTodoAsComplete: async (_, { id }, { prisma }) => {
      const updatedTodo = await prisma.todo.update({
        where: { id },
        data: {
          completed: true,
        },
      });
      return updatedTodo;
    },

    // NAME CHANGE via ID AND NEW NAME 
    updateTodoTitle: async (_, { id, title }, { prisma }) => {
      const updatedTodo = await prisma.todo.update({
        where: { id },
        data: {
          title, 
        },
      });
      return updatedTodo;
    },

  

  // DELETION via ID
  deleteTodo: async (_, { id }, { prisma }) => {
    const deletedTodo = await prisma.todo.delete({
      where: { id },
    });
    return deletedTodo;
  },
};









