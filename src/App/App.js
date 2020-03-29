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
      completed: false,
    };
  }

  handleComplete = () => {
    this.setState({
      completed: true
    })
  }

  render() {
    return (
      <>
        <div className={`window animated ${this.state.completed ? 'tada' : ''}`}>
          <div className="frame">
            <span className="btn btn-close"></span>
            <span className="btn btn-minimize"></span>
            <span className="btn btn-fullscreen"></span>
          </div>
          <div className="content">
            <Editor
              snippet={this.state.snippets[this.state.index]}
              onComplete={this.handleComplete}
              locked={this.state.completed}/>
          </div>
        </div>
      </>
    )
  }
}

export default App;
