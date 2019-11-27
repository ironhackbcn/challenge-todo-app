import React, { Component } from 'react'
import ToDoCard from "./toDoCard"
import axios from "axios"
import CreateToDo from "./createToDo"

export default class showToDo extends Component {

    state = {
        toDoList: [],
    }

    async componentDidMount() {
        const apiCaller = axios.create({
            baseURL: `http://localhost:4000/api/v1`,
            withCredentials: true
        })
        const response = await apiCaller.get("/todos");
        const toDoList = response.data
        this.setState({
            toDoList
        })
    }

    async deleteToDo(id, title) {
        const apiCaller = axios.create({
            baseURL: `http://localhost:4000/api/v1`,
            withCredentials: true
        })
        await apiCaller.delete("/todos/" + id)
        const newToDoList = this.state.toDoList.filter(toDo => toDo.title !== title)

        this.setState({
            toDolist: newToDoList
        })
    }

    refresh = async() =>{
        const apiCaller = axios.create({
            baseURL: `http://localhost:4000/api/v1`,
            withCredentials: true
        })
        const response = await apiCaller.get("/todos");
        const toDoList = response.data
        this.setState({
            toDoList
        })
    }

    render() {

        const { toDoList, status } = this.state

        return (
            <div>
                {
                    toDoList.length > 0 ?
                        <div>
                            {
                                toDoList.map((todo, key) => {
                                    return <ToDoCard key={key} todo={todo} deleteToDo={this.deleteToDo} />
                                })
                            }
                        </div>
                        :
                        <p>No ToDos to be done</p>
                }
                <CreateToDo refresh={this.refresh}/>
            </div>
        )
    }
}
