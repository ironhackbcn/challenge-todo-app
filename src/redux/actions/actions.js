export const addAllTasks = ( allTasks ) => ({
  type: 'ADD_ALL_TASKS',
  payload: allTasks
})

export const addTask = ( task )=> ({
  type: 'ADD_TASK',
  payload: task
})