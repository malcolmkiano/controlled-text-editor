import React from 'react';
import { parseCode } from '../../Modules/syntax';
import './Editor.sass';

class Editor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ...props.snippet,
      code: parseCode(props.snippet, props.locked),
      completed: []
    };
  }

  handleInput = e => {
    const input = e.target;
    input.size = input.value.length > 1 ? input.value.length - 1 : 1;

    let { completed } = this.state;
    const name = input.name;
    const field = this.state.fields[name];

    if (input.value.toLowerCase() === field.expected.toLowerCase()) {
      if (!completed.includes(input.name)) completed.push(name);
    } else {
      completed = completed.filter(f => f !== name);
    }

    if (field.watch) {
      document.querySelector(field.watch.el).style = `${field.watch.prop}: ${input.value || field.default}`
    }

    this.setState({ completed: completed });

    if (completed.length === Object.keys(this.state.fields).length) {
      this.props.onComplete();
    }

  }

  componentDidUpdate(props) {
    if (props.locked !== this.props.locked) {
      this.setState({
        code: parseCode(this.props.snippet, this.props.locked)
      });
    }
  }

  render() {
    return (
      <div
        className="editor"
        dangerouslySetInnerHTML={{__html: this.state.code}}
        onInput={this.handleInput}>  
      </div>
    );
  }

}

export default Editor
