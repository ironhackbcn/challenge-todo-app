const initialState = {
  todos: []
}

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_ALL_TASKS':
      const newState = {
        ...state,
        todos:[...action.payload]
      }
      return newState;

    case 'ADD_TASK':
        return {
          ...state,
          todos:[...state.todos, action.payload],
        };

    case 'DELETE_TASK':
      console.log(state.todos)
      const updatedState = state.todos.filter( el => {
        return el._id !== action.payload
      })
      console.log('updated',...updatedState)

      return {
        ...state,
        todos: [...updatedState]
      }


    default:
      return state;
  }
}

export default todosReducer;