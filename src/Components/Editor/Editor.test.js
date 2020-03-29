import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './Editor';

import { create } from 'react-test-renderer';
import snippets from '../../Store/Store';

describe('<Editor />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Editor snippet={snippets[0]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('fires an event on completion', () => {

    let isComplete = false;

    const component = create(<Editor snippet={snippets[0]} onComplete={() => {isComplete = true}} />);
    const instance = component.getInstance();
    instance.props.onComplete();

    expect(isComplete).toBe(true);

  })

});
