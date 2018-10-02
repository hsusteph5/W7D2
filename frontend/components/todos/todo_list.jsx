import React from 'react';
import TodoListItem from './todo_list_item.jsx'
import TodoForm from './todo_form.jsx'

// const practice = () => (<h3>Todo List goes here!</h3>);
const TodoList =({todos, receiveTodo}) => {
  window.todos = todos;
  return (
    <div>
      <h1> Todo List </h1>
      <ul>
        {
          todos.map((el) => {
            return (
              <TodoListItem key={el.id} li={el} />
            )
          })
        }
      </ul>
      <TodoForm receiveTodo={receiveTodo}/>
    </div>
  );


}

export default TodoList;

//{ todos.map((el) => (<li>{el}</li>))}
