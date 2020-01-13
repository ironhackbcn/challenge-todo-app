import React, { Component } from "react";
import axios from "axios";

class List extends Component {
    state = {
        name: "",
        listOfCoins: [],
        copyListOfCoins: []
      };


      getTodos = () => {
        axios
        // process.env.REACT_APP_API_URL}
          .get(`http://localhost:4000/todos`)
          .then(response => {
            console.log(response);
            
          })
          .catch(err => console.log(err));
      };


      componentDidMount() {
        this.getTodos();
      }

    render(){

        return (
            <div>
                 <h3></h3>
                 <title></title>
            </div>

        )
    }
}

export default List;
