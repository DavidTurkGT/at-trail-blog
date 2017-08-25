import React from 'react';

const Post = (props) => {
  const postItems = props.posts.map( (post) => {
    return (
      <div className="post">
        <div className="date"></div>
        <div className="body">
          <p>{post.text}</p>
        </div>
      </div>
    )
  })

  return (
    <div>
      {postItems}
    </div>
  )
}

export default Post;
