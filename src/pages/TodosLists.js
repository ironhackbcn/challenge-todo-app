import React, { Component } from 'react';

//import components

import DoneTodos from '../components/DoneTodos';
import TodoCreateForm from '../components/TodoCreateForm';
import NotDoneTodos from '../components/NotDoneTodos';

export default class TodosLists extends Component {
    render() {
        return (
            <>
                <header>
                    <h1><span>Todo</span> List</h1>
                </header>
                <TodoCreateForm/>
                <div className='todos-list-container'>
                    <NotDoneTodos/>
                    <DoneTodos/>
                </div>
            </>
        )
    }
}
