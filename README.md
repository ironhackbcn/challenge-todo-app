#  TODO CHALLENGE


## Description

Todos explanation will go here soon.

## User Stories

    Create todo As a user I want to create a new todo/task with title and body and save it in the database.
    List todos As a user I want to see all my todos in a list.
    Delete todo As a user I want to delete a todo from the list when I don't want it anymore.
    Update todo A a user I want to be able to modify an existing todo.


## Backlog
 
    Done As a user I want to mark my todo as done.
    Move todos As a user I want to rearrange my todos.


# Server / Backend

## Models

Todo model

```
{
  title: String,
  Body: String,
  Done: Boolean
}
```


## API Endpoints (backend routes)

### Get All Todos
----
  Returns json data with all todos.
  
  | URL | Method | Params | Data Params | Success response | Error response|
  |--|--|--|--|--|--|
  |`/todos`|GET|None|None|Status 200||


**Get Todo**
----
  Returns json data about a single todo.
  
  | URL | Method | Params | Data Params | Success response | Error response|
  |--|--|--|--|--|--|
  |`/todos/:id`|GET|`id=[ObjectId]`|None|Status 200|Status 404|

**Create Todo**
----
  Returns json data about the created todo.
  
  | URL | Method | Params | Data Params | Success response | Error response|
  |--|--|--|--|--|--|
  |`/todos`|POST|None|`title=[String]`|Status 200|Status 400 |

**Update Todo**
----
  Returns json data about the updated todo.
  
  | URL | Method | Params | Data Params | Success response | Error response|
  |--|--|--|--|--|--|
  |`/todos/:id`|PUT|`id=[ObjectId]`|`title=[String]`|Status 200|Status 400 |


**Delete Todo**
----
  Returns json data about the deleted todo.
  
  | URL | Method | Params | Data Params | Success response | Error response|
  |--|--|--|--|--|--|
  |`/todos/:id`|DELETE|`id=[ObjectId]`|none|Status 200|Status 400 |


## Links

### Trello

[Link to trello board](https://trello.com/b/lfnIzVHR/challenge-to-do-app) 

### Git

[App frontend repository Link](hhttps://github.com/MartaCamacho/challenge-todo-app)

[Api backend repository Link](https://github.com/MartaCamacho/challenge-todo-api)
