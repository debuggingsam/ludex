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


`;
