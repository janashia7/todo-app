import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import dbConnection from './db/connection/connection.js';
import cors from 'cors';
import typeDefs from './schema/typeDefs/index.js';
import resolvers from './schema/resolvers/index.js';
import generateTodoModel from './schema/models/index.js';
import validateUser from './controllers/validateUser.js';

(async () => {
  try {
    await dbConnection();
    const app = express();

    app.use(cors());

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: async ({ req }) => {
        const { username, password } = req.headers;
        let user;
        try {
          user = await validateUser({ username, password });
        } catch (err) {
          console.log(err);
        }
        return {
          user,
          models: {
            Todo: generateTodoModel(user),
          },
        };
      },
    });

    await server.start();
    server.applyMiddleware({ app });

    app.use((req, res) => {
      res.status(200);
      res.send('Welcome Todo App');
      res.end();
    });

    app.listen({ port: 4000 }, () => {
      console.log(
        `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
      );
    });
  } catch (error) {
    console.error(error);
  }
})();
