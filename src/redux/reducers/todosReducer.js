const initialState = {
  todos: []
}

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_ALL_TASKS':
      const newState = {
        ...state,
        todos:[...state.todos, action.payload]
      }
      return newState;

    case 'ADD_TASK':
        return {
          ...state,
          todos: [...action.payload],
        };

    default:
      return state;
  }
}

export default todosReducer;