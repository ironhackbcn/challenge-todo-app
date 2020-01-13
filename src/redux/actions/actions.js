// import {ADD_ALL_TASKS, ADD_TASK, DELETE_TASK} from './../types/types'

export const addAllTasks = ( allTasks ) => ({
  type: 'ADD_ALL_TASKS',
  payload: allTasks
})

export const addTask = ( task )=> ({
  type: 'ADD_TASK',
  payload: task
})

export const deleteTask = ( taskId )=> ({
  type: 'DELETE_TASK',
  payload: taskId
})

