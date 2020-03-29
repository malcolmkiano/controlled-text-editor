import React from 'react';
import snippets from '../Store/Store';
import Editor from '../Components/Editor/Editor';

import './App.sass';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snippets: snippets,
      index: 0,
      fields: {},
    };
  }

  handleComplete = (field, status) => {
    const { fields } = this.state;
    fields[field] = status;
    this.setState({
      fields: fields
    }, () => {
      
      // hook on the completion event of different fields        
      if (field === 'selector') {
        this.setState({
          darkEditor: status
        })
      }

    });
  }

  render() {
    const snippet = this.state.snippets[this.state.index];
    const { fields } = this.state;
    const listed = Object.values(fields).filter(value => value === true);
    const completed = listed.length === Object.values(snippet.fields).length;
    return (
      <>
        <div className={`window animated ${completed ? 'tada' : ''}`}>
          <div className="frame">
            <span className="btn btn-close"></span>
            <span className="btn btn-minimize"></span>
            <span className="btn btn-fullscreen"></span>
          </div>
          <div className={`content ${this.state.darkEditor ? 'dark' : ''}`}>
            <Editor
              snippet={snippet}
              onComplete={this.handleComplete}
              locked={completed}/>
          </div>
        </div>
      </>
    )
  }
}

export default App;
