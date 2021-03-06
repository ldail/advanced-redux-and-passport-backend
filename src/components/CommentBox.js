import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {saveComment, fetchComments} from 'actions';
import {withRouter} from 'react-router-dom';

const CommentBox = ({saveComment, fetchComments, auth, history}) => {

  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    saveComment(comment);
    setComment('');
  }

  useEffect(() => {
    if (!auth) {
      history.push('/');
    }
  }, [auth]);

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h4>Add a comment</h4>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      <div>
        <button type="submit">Submit Comment</button>
      </div>
    </form>
    <button type="button" onClick={fetchComments} className="fetch-comments">Fetch comments</button>
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  saveComment: (comment) => dispatch(saveComment(comment)),
  fetchComments: () => dispatch(fetchComments())
})



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CommentBox));