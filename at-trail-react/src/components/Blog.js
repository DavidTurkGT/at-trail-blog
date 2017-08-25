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
    })
  }

  render(){
    //TODO: This will be deleted once a DB is connected
    let photos = this.state.photos;
    let sentences = this.state.sentences;
    if(photos.length && sentences.length){
        console.log("Creating posts...");
        console.log("State: ", this.state);
        //Build a random amount of text
        let numSentences = Math.floor(Math.random() * 10) + 5 //5-15, incl.
        console.log("Creating " + numSentences + " sentences");
        let text = "";
        for(let i = 0; i < numSentences; i++){
          let sen = sentences[Math.floor(Math.random() * sentences.length)];
          text += sen;
        }
        //Choose a random number of photos
        let numPhotos = Math.floor(Math.random() * 5) //0-5, incl.
        console.log("Choosing " + numPhotos + " photos");
        let photoArr = [];
        for(let i = 0; i < numPhotos; i++){
          photoArr.push(photos[Math.floor(Math.random() * photos.length)]);
        }
        let newPost = {
          text: text,
          photos: photoArr,
        }
        console.log("Created the post: ", newPost);

        console.log("Done!");
    }
    return (
      <div className='blog'>
        Blog
        <Month />
      </div>
    )
  }
}

export default Blog;
