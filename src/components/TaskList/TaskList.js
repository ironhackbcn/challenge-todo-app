import React from "react";

function TaskList(props) {
  const deleteButton = (taskId) => {
    props.deleteTask(taskId);
  };

  return (
    <div className='task-list'>
      <h2>Task List:</h2>
      {props.taskList.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <div>
          {props.taskList.map((task) => {
            return (
              <article key={task._id}>
                <div>
                  <h3>{task.title}</h3>
                  <p>{task.body}</p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      deleteButton(task._id);
                    }}
                  >
                    Delete Task
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default TaskList;
