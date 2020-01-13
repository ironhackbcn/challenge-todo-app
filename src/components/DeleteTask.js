// import React, { Component } from 'react'
// import axios from 'axios'

// export default class DeleteTask extends Component {
  
//     deleteComment = id => {
//         const todoList = this.state.todoList;
//         console.log(id);
//         const taskId = id;
//         console.log("Hello", todoList);
    
//         let newTodoList = todoList.filter(el => {
//           return el._id !== id;
//         });
    
//         axios
//           .delete(`todos/${taskId}`)
//           .then(response => {
//             console.log("Hello", response);
//             const task = response.data;
//             console.log(task);
//             //    if (finalCommentsList > 1) {
//             this.setState({ todoList: newTodoList });
//           })
//           .catch(err => {
//             console.log(err);
//           });
//       };
    
//     render() {
//         return (
//             <div>
//                 <button
//                 id="delete-btn"
//                 onClick={e => this.deleteComment(task._id)}
//                 >Delete Task</button>
//             </div>
//         )
//     }
// }

