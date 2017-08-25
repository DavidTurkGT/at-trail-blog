import React from 'react';
import Post from './Post';

const Month = (props) => {
  return (
    <div className={props.name + "-container"}>
      <div className="heading">
        <h1>{props.name}, 2018</h1>
      </div>
      <Post posts={props.posts} key={props.posts.id}/>
    </div>
  )
}
export default Month;
