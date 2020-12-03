import React, { Component } from "react";
import { Link } from 'react-router-dom'


class ToDoesList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.listOfToDoes.map((element) => {
            return <li key={element._id}><Link to={`/todos/${element._id}`}>{element.title}</Link></li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ToDoesList;
