export const typeDefs = /* GraphQL */ `
  scalar Date 

  input CreateSomethingInput {
    name: String!
  }

  type Something {
    id: ID!
    name: String!
  }

  type Mutation {
    createSomething(input: CreateSomethingInput!): Something!
    createTodo(input: CreateTodoInput!): Todo!
    deleteTodo(id: String!): Todo!
    markTodoAsComplete(id: String!): Todo!
    markTodoAsIncomplete(id: String!): Todo!
    updateTodoTitle(id: String!, title: String!): Todo!
  }



 type Query {
    hello: String
    getAllTodos: [Todo!]!
    getTodoById(id: String!): Todo
    getCompletedTodos: [Todo!]!
    getIncompleteTodos: [Todo!]!
}


  type Todo {
    id: ID!
    title: String!
    completed: Boolean!
    createdAt: Date!
    updatedAt: Date!
  }

  input CreateTodoInput {
    title: String!
    completed: Boolean
  }

  input UpdateTodoInput {
    title: String
    completed: Boolean
  }


`;

