import React from 'react';
import './master.css';

class PhotoEntry extends React.Component {

  render() {

    const image_dir = "../images/";
    const full_image_path = image_dir + this.props.src;

    return <a href={full_image_path}>
              <img class="photo-entry" src={full_image_path} alt={full_image_path} />
           </a>
  }

}

export default PhotoEntry;
