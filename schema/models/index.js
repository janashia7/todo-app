import Todo from '../../db/models/TodoModel.js';
import User from '../../db/models/UserModel.js';
const generateTodoModel = (user) => {
  //! Queries
  const getAll = async () => {
    try {
      const todoList = await Todo.find({});
      return todoList;
    } catch (error) {
      throw new Error(`Error retrieving todos: ${error}`);
    }
  };

  const getUsers = async () => {
    try {
      return User.find({});
    } catch (error) {
      throw new Error(`Error retrieving users: ${error}`);
    }
  };

  const getUserNotes = async () => {
    try {
      return Todo.find({ owner_id: user._id });
    } catch (error) {
      throw new Error(`Error retrieving user notes: ${error}`);
    }
  };

  //! Mutations

  const addUser = async (user) => {
    try {
      const newUser = await new User(user).save();
      return newUser;
    } catch (error) {
      throw new Error(`Error adding new user: ${error}`);
    }
  };

  const addTodo = async (todo) => {
    try {
      if (!user) {
        return null;
      }
      const newTodo = await new Todo(
        Object.assign({}, { ...todo }, { owner_id: user._id })
      ).save();
      return newTodo;
    } catch (error) {
      throw new Error(`Error adding new todo: ${error}`);
    }
  };

  const modifyItem = async (body) => {
    try {
      return Todo.findByIdAndUpdate(body.id, body.query);
    } catch (error) {
      throw new Error(`Error updating new todo: ${error}`);
    }
  };

  const deleteItem = async (id) => {
    try {
      return Todo.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(`Error deleting new todo: ${error}`);
    }
  };

  return {
    queries: {
      getUsers,
      getUserNotes,
      getAll,
    },
    mutations: {
      addUser,
      addTodo,
      modifyItem,
      deleteItem,
    },
  };
};

export default generateTodoModel;
