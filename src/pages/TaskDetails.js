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
    
    componentDidMount(){
        return Tasks.getTodo()
        .then((resp) => {
           console.log(resp)
          this.setState({
            title: resp.title,
            title: resp.description,
          });
        })
        .catch((err) => console.log(err));
      }
  

  

  
  render(){
    const { title, description } = this.state;
    return (
        <div>
        <h1>{this.state.title}</h1>
        <h4>{this.state.description}</h4>
        </div>
        
      
     
    );
}
};

export default withAuth(updateTodo);