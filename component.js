import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './app/compents/CommentBox';
import './semantic/dist/semantic.min.css';

var comments = [
  {"author":"Hikaru", "date": "5分钟前", "text": "你好"},
  {"author":"Shindou", "date": "5分钟前", "text": "你好"}
]

ReactDOM.render(
  <CommentBox url="app/comment.json"/>,
  document.getElementById('app')
  )


