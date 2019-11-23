import React from 'react';

const TaskCard = (props) => {
  const { task: { title, body } } = props;
  return (
    <>
      <p>Title: {title}</p>
      <p>More details: {body}</p>
    </>
  );
};

export default TaskCard;