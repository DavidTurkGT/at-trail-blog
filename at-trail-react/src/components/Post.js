import React from 'react';

const Post = (props) => {
  const postItems = props.posts.map( (post) => {
    //Logic to create a post
    let text = post.text;
    let photos = post.photos;
    let postContent = [];

    if(photos.length){
      postContent.push(<p>This is a text</p>)
    }
    else {
      postContent.push(<p>{text}</p>);
    }

    return (
      <div className="post">
        <div className="date"></div>
        <div className="body">
          {postContent}
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
