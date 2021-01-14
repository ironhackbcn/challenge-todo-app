import React, from "react";
import axios from "axios";

export default class Todo extends Component {
    state ={
        todoArray: []
    }

    render(){
        return (
            <div>
                <h1>TO DO LIST</h1>
                {this.state.todoArray.map((todo)=>(
                    
                ))}
            </div>
        )
    }
}
