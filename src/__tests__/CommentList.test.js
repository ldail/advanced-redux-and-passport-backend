import React from 'react';
import {mount} from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

describe('Comment list', () => {

  let wrapped;
  let initialState = {comments: ['Comment 1', 'Comment 2']};

  beforeEach(() => wrapped = mount(<Root initialState={initialState}><CommentList /></Root>))
  it('creates one li per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
  })

  it('text from each comment is visible', () => {
    // let firstComment = wrapped.find('li').first().text();
    // console.log(firstComment);

    expect(wrapped.render().text()).toContain('Comment 1');
    expect(wrapped.render().text()).toContain('Comment 2');
  })

})