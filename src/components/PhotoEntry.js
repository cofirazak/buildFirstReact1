import React from 'react';
import './master.css';
// Task 5 import ContentAreaContext from './ContentAreaContext';

class PhotoEntry extends React.Component {

  // Task 5 static contextType = ContentAreaContext;

  render() {

    const image_path = "../images/" + this.props.src;

    return (

        <div className="photo-entry-block" >
            <a href={image_path}>
                <img className="photo-img" src={image_path} alt={image_path} />
            </a>
            <div className="photo-caption">{this.props.caption}</div>
            <div className="photo-info">{this.props.location}</div>
            { /* Task 5 ??? !== "" &&
                <div className="photo-comment">Commenting as: {???} <input type="text" placeholder="comment"/></div>
            */ }
        </div>

    );

  }

}

export default PhotoEntry;
