import React from "react";
import "./TaskDetails.css"

function TaskDetail({ eachDetail }) {
  return (
    <div className="card-detail">
      <h2><strong>{eachDetail.title}</strong></h2>
      <p>{eachDetail.body}</p>
    </div>
  );
}

export default TaskDetail;
