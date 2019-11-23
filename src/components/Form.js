import React from "react";
import "./Form.css";

const Form = props => {
  const { title, body, handleChange, handleSubmit } = props;
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Add a task</h2>
        <div className="inputs">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="body">Body</label>
          <input type="text" name="body" value={body} onChange={handleChange} />
          <br />
          <input
            className="button-medium"
            id="submit"
            type="submit"
            value="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
