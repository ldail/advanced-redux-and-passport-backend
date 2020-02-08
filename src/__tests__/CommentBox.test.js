import React from 'react';
import CommentBox from 'components/CommentBox';
import {mount} from 'enzyme';
import Root from 'root';

describe('Comment Box', () => {

  let wrapped;
  beforeEach(() => {
    wrapped = mount(<Root><CommentBox /></Root>)
  })

  afterEach(() => {
    wrapped.unmount();
  })
  
  it('has a text area', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
  });

  it('has a button', () => {
    expect(wrapped.find('button').length).toEqual(2);
  })

  describe('the text area', () => {

    beforeEach(() => {
      let textarea = wrapped.find('textarea');
      textarea.simulate('change', {
        target: { value: 'new comment' }
  
      });
  
      textarea.update(); 
    })
    it ('has a text area that users can type in', () => {
      expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

    })

    it('empties out after users press the submit button', () => {
      wrapped.find('form').simulate('submit');
      expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
  })
});