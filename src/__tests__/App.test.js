import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App.js';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import {shallow} from 'enzyme';
import Root from 'Root';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Root><App /></Root>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('All components', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = shallow(<App />);
  })
  it('shows comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
  });

  it('shows comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
  });
});
