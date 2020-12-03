import React, { useState, useEffect} from "react";



function App(ToDo) {

  const [tasks, setTasks] = useState([
    {title: "",
    body: ""
    }
  ]);

  useEffect(() => {
    setTasks (tasks)
  }, [tasks]);

  function handleChange(event, index) {
    const { name, value } = event.target;
    const newTasks = [...tasks];
    newTasks[index] = {
      ...tasks[index],
      [name]: value
    };
    
    
    setTasks(newTasks);
  
  }


  function addTask() {
    const { name, value} = tasks;
    const newTasks = [...tasks];
    newTasks[tasks] = {
      ...tasks[tasks],
      [name]: value
    };

    setTasks(newTasks);
  }

 function handleFormUpdate (event) {
    event.preventDefault();
  
   
    
   
  }; 

  function deleteTask(id) {
    setTasks(prevTasks => {
      return prevTasks.filter((tasks, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
      <form>
        {tasks.length &&
          tasks.map((tasks, index) => (
            <div>
            
            <input
                key={index}
                name="title"
                onChange={(e) => {
                  handleChange(e, index);
                }}
                placeholder="title"
                value={tasks.title}
              />
              <input
                key={index}
                type="text"
                name="body"
                onChange={(e) => {
                  handleChange(e, index);
                }}
                placeholder="description"
                value={tasks.body}
              />
            </div>
          ))}
          <br/>
      
      </form>
          < button onClick={addTask}>
            <span>Add task</span>
          </button> 
          < button onClick={deleteTask}>
            <span>Delete task</span>
          </button> 
       
      </div>
     
    </div>
  );
}

export default App;
