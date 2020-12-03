import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'



export default class Create extends Component {

    state = {
        title: "",
        body: ""
    }

    handleSubmit = async (e) => {
        const { title, body } = this.state;

        e.preventDefault();

        try {
          const res = await axios({
            method: "POST",
            url: process.env.REACT_APP_API_URL + `/api/v1/todos`,
            data: { title: title, body: body},
          });
          this.setState({
            title: "",
            body: ""
          });
        //    this.props.history.push('/groups')
        } catch (error) {
          console.log(error, "error on POST");
        }
      };

      handleChange = e => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
      }


    render() {
        return (
            <div>
                <Navbar />
                <form onSubmit={this.handleSubmit} id="add-new-form">
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="title">Body:</label>
                        <input type="text" name="body" value={this.state.body} onChange={this.handleChange} />
                    </div>

                    <div>
                        <input type="submit" value="Add new todo" />
                    </div>
                </form>
            </div>
        )
    }
}
