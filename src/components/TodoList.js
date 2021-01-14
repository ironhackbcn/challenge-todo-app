import React from 'react'
import TodoCard from './TodoCard';

function TodoList(props) {

    const tasks = props.tasks;

    console.log('tasks', tasks)

    return (
        <div>
            {tasks.map(task => {return <TodoCard task={task} key={task._id}/>})}
        </div>
    )
}

export default TodoList;
