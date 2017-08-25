import React, { Component } from 'react';
import Month from './Month';

class Blog extends Component {
  constructor(props){
    super(props);
    this.state = {
      test: "Message!"
    }
  }

  componentDidMount(){
    //Fetch photos and add to state
    this.fetchPhotos();
    //Create March posts and add to state

    //Create April posts and add to state

    //Create May posts and add to state

    //Create June posts and add to state

    //Create July posts and add to state

    //Create August posts and add to state

    //Create September posts and add to state
  }

  fetchPhotos(){
    const photoURL = "https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase=appalachia";
    let request = new Request(photoURL, {
      headers: new Headers({
        'Api-key': "rscbhm9r6exe9s7uc7che8ee"
      })
    })
    fetch(request)
      .then( (res) => {
        console.log("Response received: ", res);
        return res.json();
      })
      .then( (data) => {
        console.log("Data received: ", data);
        let photoUrls = data.images.map( x => x.display_sizes[0].uri);
        this.setState({
          photos: photoUrls
        })
      })
  }

  render(){
    console.log("Photos: ", this.state.photos);

    return (
      <div className='blog'>
        Blog
        <Month />
      </div>
    )
  }
}

export default Blog;
