import React from "react";

function TaskDetail({ eachDetail }) {
  return (
    <div>
      <div>
        <h2>{eachDetail.title}</h2>
        <p>{eachDetail.body}</p>
      </div>
    </div>
  );
}

export default TaskDetail;
