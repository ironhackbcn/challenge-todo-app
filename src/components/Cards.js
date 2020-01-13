import React, { Component } from 'react'
import authService from './../lib/auth-service'; 
import Card from './Card'

export default class Cards extends Component {

    render() {
        return (
            <div className = 'cards'>
                {
                    this.props.cards.map((card) => {
                        return <Card 
                            title = {card.title}
                            body = {card.body}
                            id = {card._id}
                            updateCards = {this.props.updateCards}
                        />
                    })
                }
            </div>
        )
    }
}
