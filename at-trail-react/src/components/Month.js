import React from 'react';
import Post from './Post';

const Month = (props) => {
  return (
    <div className={props.name}>
      Month: {props.name}
      <Post />
    </div>
  )
}

export default Month;
