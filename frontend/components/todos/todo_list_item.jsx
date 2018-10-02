import React from 'react';

class TodoListItem extends React.Component {
  render() {
    // debugger
    return (
      <div>
        <li>{this.props.li.title}</li>
        <ul>
          <li>{this.props.li.body}</li>
        </ul>
      <br></br>
      </div>
    );
  }
}

export default TodoListItem;
