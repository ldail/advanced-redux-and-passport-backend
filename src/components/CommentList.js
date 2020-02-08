import React from 'react';
import { connect } from 'react-redux';

const CommentList = ({commentsList}) => {

  return (
    <ul>
      {commentsList.map((comment,index) => <li key={index}>{comment}</li>)}
    </ul>
  );
};

const mapStateToProps = state => ({
  commentsList: state.comments
})

export default connect(mapStateToProps,null)(CommentList);