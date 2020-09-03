import React, { Component } from 'react';


import DoneTodos from '../components/DoneTodos';
import TodoCreateForm from '../components/TodoCreateForm';
import NotDoneTodos from '../components/NotDoneTodos';

export default class TodosLists extends Component {

    render() {
        return (
            <>
                <header>
                    <h1>To do list</h1>
                    <TodoCreateForm/>
                </header>
                
                <div className='todos-list-container'>
                    <NotDoneTodos/>
                    <DoneTodos/>
                </div>
            </>
        )
    }
}
