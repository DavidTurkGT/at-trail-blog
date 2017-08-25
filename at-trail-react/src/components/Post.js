import React from 'react';

const Post = (props) => {
  const floatRightStyle = { float: "right"};
  const floatLeftStyle = {float: "left"};

  const postItems = props.posts.map( (post) => {
    //Logic to create a post
    let text = post.text;
    let photos = post.photos;
    let postContent = [];

    if(photos.length){
      let sentences = text.split(".  ");
      sentences = sentences.map( x => x + ".  ");
      let step = Math.floor(sentences.length / photos.length);
      for(let i = 0; i < photos.length; i++){
        let pText = "";
        for(let j = 0; j < step; j++){
          pText += sentences[i*step + j];
        }
        postContent.push(<p>{pText}</p>);
        // postContent.push(<img src={photos[i]}/>)
        if(i == photos.length - 1) {
          postContent.push(<img className="last-img" src={photos[i]} />);
        }
        else if(i%2 == 0) {
          postContent.push(<img style={floatRightStyle} src={photos[i]}/>);
        }
        else {
          postContent.push(<img style={floatLeftStyle} src={photos[i]}/>);
        }
      }
      // postContent.push(<p>This has photos</p>)
    }
    else {
      postContent.push(<p>{text}</p>);
    }

    return (
      <div className="post">
        <div className="date"></div>
        <div className="body">
          <hr/>
          {postContent}
          <hr/>
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
