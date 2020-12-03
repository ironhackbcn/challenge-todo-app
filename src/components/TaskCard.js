import React from 'react';
import { Link } from 'react-router-dom';
import "./TaskCard.css";


const TaskCard = ({ tasks}) => {
    return (
        <article className="article-task">

            <Link to={{pathname:`/list/${tasks._id}`, state: {tasksList: tasks}}}>
                <h5>Title: {tasks.title}</h5>
            </Link>
            <p>Body: {tasks.body}</p>
            {/* <button onClick={this.createEmptyGroup} className="input-button">DELETE ALL</button> */}

        </article>
    )
}

export default TaskCard