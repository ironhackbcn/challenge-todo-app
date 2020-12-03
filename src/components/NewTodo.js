import React, { Component } from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom';


 class NewTodo extends Component {

    state={
        todo: {},
        message: ""
    }

    componentDidMount(){
        if(this.props.match.params.id && Object.keys(this.state.todo).length === 0){
            axios.get(`http://localhost:4000/api/v1/todos/${this.props.match.params.id}`).then(response => {
                this.setState({
                    todo : response.data
                })
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(!this.props.match.params.id) {
            axios.post("http://localhost:4000/api/v1/todos", this.state.todo).then(response => {
                this.setState({
                    message: "Se ha añadido el todo"
                })
                })
        } else {
            axios.put(`http://localhost:4000/api/v1/todos/${this.props.match.params.id}`, this.state.todo).then(response => {
                this.setState({
                    message: "Se ha modificado el todo"
                })
                })
        }
       
    }

    handleChange = (e) => {
        this.setState({
           todo : {...this.state.todo,
           [e.target.name] : e.target.value }
        })
    }


    render() {
        return (
            
            <div>

             <div id="myDIV" class="header">
  <h2>My To Do !!!</h2> 
</div>
                <form onSubmit={this.handleSubmit}>
                <label>Title</label>
                <input type="text" name="title" value={this.state.todo.title} onChange={this.handleChange}></input>
                <label>Body</label>
                <input type="text" name="body" value={this.state.todo.body} onChange={this.handleChange}></input>
                <button className="addBtn">Submit</button>
                </form>
                <Link to="/"><button className="addBtn">Homepage</button></Link>
                <span>{this.state.message}</span>
                <div className = "Xmas">
      <div className="text2">🎅</div>
<div className="text2">🎄</div>
<div className="text2">🎁</div>
</div>
            </div>
        )
    }
}

export default NewTodo
