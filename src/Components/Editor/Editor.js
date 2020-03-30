import React from 'react';
import { parseCode } from '../../Modules/syntax';
import './Editor.sass';

class Editor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ...props.snippet,
      code: parseCode(props.snippet, props.locked)
    };
  }

  isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }

  componentDidMount = () => {
    document.querySelectorAll('input').forEach(input => {
      input.size = input.value.length;
      if (!this.isMobileDevice()) input.size -= 1;
    })
  }

  handleInput = e => {
    const input = e.target;
    input.size = input.value.length > 1 ? input.value.length : 1;
    if (!this.isMobileDevice()) input.size = input.size - 1 || 1;

    // call parent with complete status
    const name = input.name;
    const field = this.state.fields[name];
    let complete = false;
    
    if (field.matchType === 'regex') {

    } else if (field.matchType === 'exact') { 
      complete = input.value === field.expectedValue;
    } else {
      complete = input.value.toLowerCase() === field.expectedValue.toLowerCase();
    }

    // live update if 'watched' field
    if (field.watch) {
      document.querySelector(field.watch.el).style = `${field.watch.prop}: ${input.value || field.default}`
    }

    this.props.onComplete(name, complete);

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
