import React, { Component } from 'react'
import TitleCard from './TitleCard'
import AddCard from './AddCard'

export default class Topbar extends Component {
    render() {
        return (
            <nav className = 'topbar'>
                <TitleCard />
                <AddCard 
                    updateCards = {this.props.updateCards}
                />
            </nav>
        )
    }
}
