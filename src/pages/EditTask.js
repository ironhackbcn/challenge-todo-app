import React, {Component} from 'react'
import { withAuth } from '../lib/AuthProvider'
import Tasks from '../lib/tasks-service'



class updateTodo extends Component{

  constructor(props) {

    
    super(props);
    this.state = {
        title:"",
        description:"",
        id:this.props.match.params.id
    }

    
      
    };
    
  

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const {id, title, description } = this.state;

    
    Tasks.updateTodo({title, description, id});
    
    this.setState({ title:"", description: ""});
    this.props.history.push("/anonList");
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  
  render(){
    const { title, description } = this.state;
    return (
      <div>
        <h1>Edit</h1>

        <form onSubmit={this.handleFormSubmit}>
        <label>Title:</label>
          <input
            type='text'
            name='title'
            value={title}
            onChange={this.handleChange}
          />

         
         <label>Description:</label>
          <input
            type='text'
            name='description'
            value={description}
            onChange={this.handleChange}
          />

         

          <input type='submit' value='Upload' />
        </form>

        
      </div> 
    );
}
};

export default withAuth(updateTodo);