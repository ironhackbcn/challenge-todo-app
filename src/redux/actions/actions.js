export const loadAllTasks = ( allTasks ) => ({
  type: 'LOAD_ALL_TASKS',
  payload: allTasks
})

export const addTask = ( task )=> ({
  type: 'ADD_TASK',
  payload: task
})