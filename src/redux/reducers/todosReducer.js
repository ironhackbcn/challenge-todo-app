const initialState = {
  todos: []
}

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_ALL_TASKS':
      const newState = {
        ...state,
        projects:[...state.todos, action.payload]
      }
      return newState;

    case 'ADD_TASK':
        return {
          ...state,
          projects: [...action.payload],
        };

    default:
      return state;
  }
}

export default todosReducer;