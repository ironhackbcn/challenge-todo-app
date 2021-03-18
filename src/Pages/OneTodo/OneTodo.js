// import React, { Component } from "react";
// import todoService from "../../Services/todo-service";

// class OneTodo extends Component {
//   state = {
//     oneTodo: [],
//   };

//   componentDidMount() {
//     const id = this.props.match.state.id;
//     todoService
//       .getOneTodo(id)
//       .then((data) => {
//         this.setState({ oneTodo: data });
//       })
//       .catch((err) => console.log(err));
//   }
//   render() {
//     const { oneTodo } = this.state;
//     return (
//       <div>
//         <h3>{oneTodo.title}</h3>
//         <p>{oneTodo.body}</p>
//       </div>
//     );
//   }
// }

// export default OneTodo;
