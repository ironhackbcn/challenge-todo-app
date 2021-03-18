import React from 'react'
import {Link} from "react-router-dom";

function Tasks(props) {


  return (
    <div >
  
      
      <p>{ props.oneTask.title} <Link to ={"/todos/:id"}>{ props.oneTask.details}</Link></p>
     
     

     

      <button
        onClick={() => { props.clickToDelete(props.oneTask._id) }}
      >
        Delete
      </button>
    </div>
  )
}

export default Tasks;