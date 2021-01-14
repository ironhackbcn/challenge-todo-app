import React from 'react';
import axios from "axios";
import './Create.css';

class Create extends React.Component {
    state = {
        title: undefined,
        body: undefined
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { title, body } = this.state;

        axios
            .post(
                `http://localhost:4000/api/v1/todos`,
                { title, body },
            )
            .then((response) => {
                console.log('response', response)
                this.props.getTodoList();
            })
            .catch((err) => console.log(err));
        this.setState({ title: "", body: "" });

    };

    render() {
        return (
            <div>
                <header className="edit-form-header">
                    <h1>Create a Todo List</h1>
                </header>
                <section className="form-section">
                    <form className="create-form" onSubmit={this.handleFormSubmit}>
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            placeholder="Title"
                            required
                        />
                        <input
                            type="text"
                            name="body"
                            value={this.state.body}
                            onChange={this.handleChange}
                            placeholder="Description"
                            required
                        />
                        <input className="form-button" type="submit" value="Add Item" />

                    </form>
                </section>

            </div>
        )
    }
}
export default Create;