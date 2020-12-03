import React, { Component } from "react";
import { Link } from "react-router-dom";
import todoservice from '../lib/service'

class Home extends Component {
    state = {
        allTodos: []
    }

    getAll = async () => {
        const todos = await todoservice.getTodos()
        this.setState({
            allTodos: todos
        })
        console.log(this.state.allTodos)
    }

    componentDidMount(){
        this.getAll()
    }

    render(){
        const todos = this.state.allTodos
        return(
            <div>
            <h1>Hello there!</h1>
                {todos && todos.length !== 0 ?
                <div>
                    <h3>Here are all your <em>"to-do"s:</em></h3>
                    {todos.map((todo, index) => {
                    return (<div key={index} className='todo'>
                    <h1><Link style={{textDecoration: 'none', color:  '#20639B'}} to={`/${todo._id}`}>{todo.title}</Link></h1>
                    <p>{todo.body}</p>
                    </div>)})
                }
                <button className='btn' onClick={() => this.props.history.push('/addTodo')}>Add more</button> 
                 </div> : <button className='btn' onClick={() => this.props.history.push('/addTodo')}>Add something to your "To do" list!</button> }
            </div>
        )
        
    }
}

export default Home;