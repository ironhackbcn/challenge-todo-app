import React, { Component } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';


class GetTodo extends Component {
      state = {};
  
    componentDidMount() {
      this.toDo();
    }
  
    toDo = () => {
      const { params } = this.props.match;
      axios
        .get(`http://localhost:4000/api/v1/todos/${params.id}`)
        .then(infoApi => {
          console.log(infoApi, "esa info de la api ahi")
          const lista = infoApi.data;
          this.setState(lista);
        })
        .catch(err => {
          console.log(err);
        });
    };
    

  delete = () => {
    const params = this.props.match.params
    console.log(this.props.match ,"hola")
    axios.delete(`http://localhost:4000/api/v1/todos/${params.id}`)
    .then( () =>{
        this.props.history.push('/'); 

    })
    .catch((err)=>{
        console.log(err)
    })
  }
  
  render(){
    return(
      <div className="details" id="navidad">
        <h1>Your presents:</h1>
        <h1>Present: {this.state.title}</h1>
        <h3>Description: {this.state.body}</h3>
        <div>
        <button className="btn" id="delete" onClick={() => this.delete()}>Delete</button> 
        <button className="btn" ><Link to={'/'}>Return</Link></button>
        </div>
      </div>
    )
  }
}


  export default GetTodo;