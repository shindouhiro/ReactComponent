import './style.scss';


import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import CommentList from './CommentList';

ReactDOM.render(
    <div>
      <Comment />
      <CommentList />
    </div>,
    document.getElementById('app')
    )
