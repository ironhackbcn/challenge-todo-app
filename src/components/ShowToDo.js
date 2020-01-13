import React, { Component } from 'react'
import ToDo from '../lib/Todo'


export default class ShowToDo extends Component {
    state={
        show: false,
        list: [],
        done: [],
        update: false,
        newNote: "",
    }
    showToggle=(e)=>{
    e.preventDefault()
    const {show} = this.state;
    if (show)
    this.setState({show: false});
    if (!show){
    this.setState({show: true});
    ToDo.getAll()
    .then((result) => {
        this.setState({list: result.data})
    }).catch((err) => {
    });
    }
    }

    delete=(e)=>{
    const id = e.target.name;
    ToDo.delete(id)
    .then(() => {
        ToDo.getAll()
        .then((result) => {
            this.setState({list: result.data})
        }).catch((err) => {
        });
    }).catch((err) => {
        console.log(err)
    });
    }
    done=()=>{
    
    }

    render() {
        const {show, list} = this.state;
        return (
            <div>
            {
            !show?
            <button onClick={this.showToggle}>Show list</button>
            :
            <button onClick={this.showToggle}>Hide list</button>
            }
            {
            show?
            list.map((todo, i)=>{
            return <div key={i} className="todos">
            <h2>{todo.title}</h2>
            <button onClick={this.delete} name={todo._id}>Delete</button>
            <button onClick={this.update} name={todo._id}>Update</button>
            </div>
            })
            :
            null
            }
            </div>
        )
    }
}
