import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

export default class Todos extends Component {
    state = {
        todosArr: [],
    }
    render() {
        return (
            <div>
                <Link to={"/create"}>Create Todo</Link>
                <br /><br /><br />
                <h1>My TODOs</h1>
                {this.state.todosArr.map ((oneTodo)=>(
                    <Link key={oneTodo._id} to={`/todos/${oneTodo._id}`}>
                        <div className="one-todo">
                        {oneTodo.title}
                        </div>
                    </Link> 
                ))} 
            </div>
        )
    }
    componentDidMount() {
    
        axios
          .get(`http://localhost:4000/api/v1/todos`)
          .then((apiResponse) => {
         
            this.setState({ todosArr: apiResponse.data });
            console.log(this.state.todosArr[0].title)

          })
          .catch((err) => console.log(err));
      }
}
