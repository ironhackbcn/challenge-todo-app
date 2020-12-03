import React, { Component } from "react";
import { Link} from "react-router-dom";
import axios from 'axios';
import Navbar from "../components/Navbar"
import TaskCard from "../components/TaskCard"



class List extends Component {

    state = {
        listOfTasks: [],
    }


    componentDidMount() {
        this.getAllTasks();
    }

    getAllTasks = async () => {
        try {
            const res = await axios({
                method: 'GET',
                url: process.env.REACT_APP_API_URL + '/api/v1/todos',
            })

            this.setState({
                listOfTasks: res.data
            });
        } catch (error) {
            console.log(error, 'error on GET all tasks')
        }
    }




    render() {
        return (

            <div className="all-tasks">
                <Navbar />

                <div className="group-list-button">
                    {this.state.listOfTasks.map(task => {
                        return (
                            <TaskCard key={task._id} tasks={task} />
                        )
                    })}
                    {/* <button onClick={this.createEmptyGroup} className="input-button">DELETE ALL</button> */}
                </div>

            </div>
        )
    }
}

export default List;
