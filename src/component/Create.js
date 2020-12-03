import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class Create extends Component {
    state = {
        todos: [],
        title: '',
        body: '',
        showForm: false
    }

    async componentDidMount(){
        
        this.getTodos();
    }
    
    getTodos = async () => {
        const res = await axios.get('http://localhost:4000/api/v1/todos')
        console.log(res.data)
        this.setState({todos: res.data})
    }
   
    handleChange = event => {
        let { name, value } = event.target;
        this.setState({ [name]: value})
    }

    handleSubmit =  async (event) => {
        event.preventDefault();
        const {title, body} = this.state
       await  axios.post('http://localhost:4000/api/v1/todos', {title, body})
        this.getTodos()
        this.setState({
            title: '',
            body: ''
        })
    }

    deleteTodo = async (id) => {
        await axios.delete('http://localhost:4000/api/v1/todos/' + id)
        console.log(id)
        this.getTodos()
    }

    formShow = (id) => {
        this.setState({showForm: !this.state.showForm})
        console.log(id)
    }

    render() {
        console.log(this.state.todos)
        return (
     <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="">title</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="">body</label>
          <input
            type="text"
            name="body"
            value={this.state.body}
            onChange={(e) => this.handleChange(e)}
          />
          <button type="submit" >Save</button>
        </form>
            <h2>Tareas</h2>
            {this.state.todos.map((element) => 
                (<div key={element._id}> 
                    <h3>{element.title}</h3>
                    <p>{element.body}</p>
                    <button onClick={() => this.deleteTodo(element._id)}>Delete</button>
                    <Link to={'/edit/' + element._id }>Edit</Link>
                        
                </div>)
            )}
            
        
</div>
        )
    }
}
