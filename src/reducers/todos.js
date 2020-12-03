// Reducer is a function, that accepts the state and the action. Based on that action type we want to see the logic, then return an action or a mutated state.

export default (todos = [], action) => {
  // console.log(todos, "there are the todos");

  switch (action.type) {
    case "CREATE":
      return [...todos, action.payload];

    case "FETCH_ALL":
      return action.payload;

    case "UPDATE":
      return todos.map((todo) =>
        todo.id === action.payload._id ? action.payload : todo
      );

    case "DELETE":
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return todos;
  }
};
