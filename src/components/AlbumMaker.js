import React from 'react';
import PhotoEntry from './PhotoEntry';

class AlbumMaker extends React.Component {

  render() {

    const image_dir = "../images/";
    const full_image_path = image_dir + this.props.src;

    // -----  experiment starts here -----



    // ----- experiment ends here -----

    return <div>
              <PhotoEntry src="berlin.jpg" />
              <PhotoEntry src="beverly-hills.jpg" />
              <PhotoEntry src="maple-leaf.jpg" />
              <PhotoEntry src="wings.jpg" />
              <PhotoEntry src="hawaii.jpg" />
          </div>
  }

}

export default AlbumMaker;
