import React, { Component } from 'react';
import Month from './Month';

class Blog extends Component {
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
