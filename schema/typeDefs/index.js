import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Todo {
    _id: ID
    owner_id: ID
    title: String
    mission: String
    createdAt: String
    updatedAt: String
    isDone: Boolean
  }

  input TodoInput {
    title: String
    mission: String
    isDone: Boolean
  }

  type User {
    _id: ID
    username: String
    password: String
  }
  input UserInput {
    username: String
    password: String
  }

  type Query {
    getTodoList: [Todo]
    getUsers: [User]
    getUserNotes: [Todo]
  }

  type Mutation {
    addUser(user: UserInput): User
    addTodo(todo: TodoInput): Todo
    modifyItem(id: ID!, query: TodoInput): Todo
    deleteItem(id: ID!): Todo
  }
`;
export default typeDefs;
