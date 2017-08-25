import React, { Component } from 'react';
import Month from './Month';

class Blog extends Component {
  constructor(props){
    super(props);
    this.state = {
      photos: [],
      sentences: [],
      posts: {
        March: [],
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

  componentWillMount(){
    // this.state.photos = ["Hello from Will Mount"];
  }

  componentDidMount(){
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
        sentences: data.text_out.split("\r").map( x => x.substring(3, x.length - 4))
      })
    })
  }

  render(){
    console.log("State at render: ", this.state);
    return (
      <div className='blog'>
        Blog
        <Month />
      </div>
    )
  }
}

export default Blog;
