import React, { Component } from 'react'
import axios from 'axios'

export default class Edit extends Component {
    state = {
        title: '',
        body: '',
        _id: this.props.match.params.id
    }
   async componentDidMount(){
        const res = await axios.get('http://localhost:4000/api/v1/todos/' + this.props.match.params.id)
        console.log(res.data)
        this.setState({
            title: res.data.title,
            body: res.data.body
        })
    }

    handleChange = event => {
        let { name, value } = event.target;
        this.setState({ [name]: value})
    }

    update =  (event) => {
        event.preventDefault();
        axios.put('http://localhost:4000/api/v1/todos/' + this.state._id, {title: this.state.title, body: this.state.body})
        window.location.href="/";
    }
   
    

    render() {
        console.log(this.state._id)
        return (
            <div>
            <h1>EDITAR</h1>
                 <form onSubmit={this.update}>
                 <label for="title">title</label>
                 <input type="text" id="title" name="title" value={this.state.title} onChange={(e)=>this.handleChange(e)}/>
                <label for="body">Body</label>
                <input type="text" id="body" name="body" value={this.state.body} onChange={(e) => this.handleChange(e)} />
                <button type="submit" value="submit">Send</button>
                </form>
            </div>
        )
    }
}
