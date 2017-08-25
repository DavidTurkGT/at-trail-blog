import React, { Component } from 'react';
import Month from './Month';

class Blog extends Component {
  constructor(props){
    super(props);
    this.state = {
      photos: [],
      sentences: [],
      posts: {
        March: [/*{text: "Lorem ipsum...", photos: [url, url, ...]} */],
        April: [],
        May: [],
        June: [],
        July: [],
        August: [],
        September: [],
      }
    }
    // this.fetchPhotos();
  }

  componentDidMount(){
    //TODO: This should be refactored once a DB is connected
    //Fetch photos and put on state
    const photoURL = "https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase=appalachia";
    let request = new Request(photoURL, {
      headers: new Headers({
        'Api-key': "rscbhm9r6exe9s7uc7che8ee"
      })
    })
    fetch(request)
    .then( (res) => {
      return res.json();
    })
    .then( (data) => {
      let photoUrls = data.images.map( x => x.display_sizes[0].uri);
      this.setState({
        photos: photoUrls
      });
      //Fetch posts for March
      let URL = "https://www.randomtext.me/api/lorem";
      return fetch(URL + "/p-20/20-75")
    })
    .then( (res) => {
      return res.json();
    })
    .then( (data) => {
      this.setState({
        sentences: data.text_out.split("\r").map( x => x.substring(3, x.length - 4) + "  ")
      })
      this.makeBlog();
    })
  }

  makeBlog(){
    //TODO: This will be deleted once a DB is connected
    let photos = this.state.photos;
    let sentences = this.state.sentences;
    if(photos.length && sentences.length){
        let newPost;
        let marchPosts,
            aprilPosts,
            mayPosts,
            junePosts,
            julyPosts,
            augustPosts,
            septemberPosts;

        console.log("Creating posts...");
        console.log("\tCreating posts for March...");
        marchPosts = [];
        for(let i = 0; i < 16; i++){ marchPosts.push( this.createPost() ) }
        console.log("\tDone!");
        console.log("\tCreating posts for April...");
        aprilPosts = [];
        for(let i = 0; i < 27; i++){ aprilPosts.push( this.createPost() ) }
        console.log("\tDone!");
        console.log("\tCreating posts for May...");
        mayPosts = [];
        for(let i = 0; i < 29; i++){ mayPosts.push( this.createPost() ) }
        console.log("\tDone!");
        console.log("\tCreating posts for June...");
        junePosts = [];
        for(let i = 0; i < 25; i++){ junePosts.push( this.createPost() ) }
        console.log("\tDone!");
        console.log("\tCreating posts for July...");
        julyPosts = [];
        for(let i = 0; i < 30; i++){ julyPosts.push( this.createPost() ) }
        console.log("\tDone!");
        console.log("\tCreating posts for August...");
        augustPosts = [];
        for(let i = 0; i < 28; i++){ augustPosts.push( this.createPost() ) }
        console.log("\tDone!");
        console.log("\tCreating posts for September...");
        septemberPosts = [];
        for(let i = 0; i < 10; i++){ septemberPosts.push( this.createPost() ) }
        console.log("\tDone!");
        console.log("\tSetting state...");
        console.log("\tDone!");
        this.setState({
          posts:{
            March: marchPosts,
            April: aprilPosts,
            May: mayPosts,
            June: junePosts,
            July: julyPosts,
            August: augustPosts,
            September: septemberPosts,
          }
        })
        console.log("Done!");
        console.log("State: ", this.state);
    }
  }

  createPost(){
    let photos = this.state.photos;
    let sentences = this.state.sentences;
    //Build a random amount of text
    let numSentences = Math.floor(Math.random() * 10) + 5 //5-15, incl.
    let text = "";
    for(let i = 0; i < numSentences; i++){
      let sen = sentences[Math.floor(Math.random() * sentences.length)];
      text += sen;
    }
    //Choose a random number of photos
    let numPhotos = Math.floor(Math.random() * 5) //0-5, incl.
    let photoArr = [];
    for(let i = 0; i < numPhotos; i++){
      photoArr.push(photos[Math.floor(Math.random() * photos.length)]);
    }
    let newPost = {
      text: text,
      photos: photoArr,
    }
    return newPost;
  }

  render(){
    return (
      <div className='blog'>
        Blog
        <Month />
      </div>
    )
  }
}

export default Blog;
