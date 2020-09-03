import React, { useState, useEffect } from "react";
import { listTODOtask } from "../services/todo.service";
import CardTask from "../components/CardTask.jsx";
import { v4 as uuidv4 } from 'uuid';

const ListTODO = () => {
  const [tasks, setTasks] = useState([]);

  const getTaskService = async () => {
    try {
      const tasksService = await listTODOtask();
      setTasks(tasksService);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTaskService();
    return () => {
      setTasks([]);
    };
  }, []);

  return (
    <div>
      <h1>Estos son tus TODOs</h1>
      {tasks &&
        tasks.map((task) => {
          return <CardTask key={uuidv4()} {...task} getTaskService={getTaskService} />;
        })}
    </div>
  );
};

export default ListTODO;
