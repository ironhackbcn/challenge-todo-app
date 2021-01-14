import React, { Component } from 'react';
import './Home.css';
import Button from 'react-bootstrap/Button';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>To Do Application: FAIL</h1>
                <Button variant="dark" size="lg" href="/todo">
                To do page
                </Button>
                
            </div>
        );
    }
}

export default Home;