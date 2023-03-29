# Todo App with GraphQL

This is a GraphQL API for a todo app that allows you to create and manage todos.

## Getting started

To run the app, follow the steps below:

 1. Clone the repository:

```bash
git clone https://github.com/janashia7/todo-app.git
```

2. Install the dependencies:

```bash
cd todo-app
npm install
```

3. Set environment variables:

Create a `.env` file in the root directory and add the following variables:

```bash
MONGO_URL=<your-mongodb-url>
```

1. Start the server:

```bash
npm run dev
```

The app should now be running on [http://localhost:4000/graphql](http://localhost:4000/graphql).

## API

The API supports the following operations:

### Queries

- `getTodoList`: Returns a list of all todos.
- `getUsers`: Returns a list of all users.
- `getUserNotes`: Returns a list of todos owned by the current user.

### Mutations

- `addUser(user: UserInput)`: Adds a new user.
- `addTodo(todo: TodoInput)`: Adds a new todo.
- `modifyItem(id: ID!, query: TodoInput)`: Modifies a todo with the specified ID.
- `deleteItem(id: ID!)`: Deletes a todo with the specified ID.

### Types

The following types are used in the API:

- `Todo`: Represents a todo item. Fields include `_id`, `owner_id`, `title`, `mission`, `createdAt`, `updatedAt`, and `isDone`.
- `TodoInput`: Represents input for a new todo. Fields include `title`, `mission`, and `isDone`.
- `User`: Represents a user. Fields include `_id`, `username`, and `password`.
- `UserInput`: Represents input for a new user. Fields include `username` and `password`.

### Authentication

To interact with the API, users need to be authenticated with a valid `username` and `password`. This is done through HTTP headers in each request. When making a request to the server, make sure to include the following headers:

```css
username: your_username
password: your_password
```

The server will then validate the user credentials and include the authenticated user in the `context` object of the GraphQL API. This allows you to create, update, and delete todos that belong to the authenticated user.

### Contributing

Contributions are welcome. If you find a bug or have a feature request, please open an issue or submit a pull request.

### License

This project is licensed under the MIT License.
