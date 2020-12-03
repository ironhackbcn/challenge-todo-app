import React from "react";

function Task({ eachTask }) {
  return (
    <div key={eachTask._id}>
      <div>
        <h4>{eachTask.title}</h4>
      </div>
    </div>
  );
}
export default Task;
