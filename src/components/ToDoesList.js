import React, { Component } from "react";
import { Link } from 'react-router-dom'


class ToDoesList extends Component {

    // COmponent to render the To Does and link to details
  render() {
    return (
      <div className="list-component">
        <ul className="list-of-to-does">
          {this.props.listOfToDoes.map((element) => {
            return <li key={element._id}><Link className="links" to={`/todos/${element._id}`}>{element.title}</Link></li>;
          })}
        </ul>
        { this.props.listOfToDoes ? <p>Click on the To Do to see details!</p> : null}
      </div>
    );
  }
}

export default ToDoesList;
