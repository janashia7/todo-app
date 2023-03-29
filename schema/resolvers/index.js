const resolvers = {
  Query: {
    getTodoList: async (parent, args, context) =>
      await context.models.Todo.queries.getAll(),
    getUsers: async (parent, args, context) =>
      await context.models.Todo.queries.getUsers(),
    getUserNotes: async (parent, args, context) =>
      await context.models.Todo.queries.getUserNotes(),
  },
  Mutation: {
    addUser: async (parent, args, context) => {
      const { user } = args;
      return await context.models.Todo.mutations.addUser(user);
    },
    addTodo: async (parent, args, context) => {
      const { todo } = args;
      return await context.models.Todo.mutations.addTodo(todo);
    },
    modifyItem: async (parent, args, context) => {
      return await context.models.Todo.mutations.modifyItem(args);
    },
    deleteItem: async (parent, args, context) => {
      const { id } = args;
      return await context.models.Todo.mutations.deleteItem(id);
    },
  },
};

export default resolvers;
