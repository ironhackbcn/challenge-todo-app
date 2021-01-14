import React from 'react';

class Task extends React.Component {

  render() {
    return (
      <div>
        <div>
          <h1>{this.props.title}</h1>
       
        </div>

        <div>
          <h2><u> Task Description </u></h2>      
          <p>{this.props.desc}</p>
          <button className='delete' onClick={ ()=> this.props.deleteTask(this.props.id) }>DELETE</button>
          
        </div>
      </div>
      )}
}

export default Task;
