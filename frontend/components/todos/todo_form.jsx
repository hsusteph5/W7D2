import React from 'react';
import uniqueId from '../../util/uniqueId';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.setTitle = this.setTitle.bind(this);
    this.setBody = this.setBody.bind(this);
  }

  setTitle(e){
    const title = e.target.value;
    this.setState({title});
  }
  setBody(e){
    const body = e.target.value;
    this.setState({body});
  }

  handleClick(e) {
    e.preventDefault();
    this.props.receiveTodo(
      { id: uniqueId(),
        title: this.state.title,
        body: this.state.body
      });
      this.setState({id: 0, title: '', body: ''});
  }

  render() {

    return (
      <div>
        <input onChange={this.setTitle} value={this.state.title}/>
        <input onChange={this.setBody} value={this.state.body}/>
        <button onClick={(e)=> this.handleClick(e)}>
        Submit
        </button>
      </div>
    );
  }

}

export default TodoForm;
