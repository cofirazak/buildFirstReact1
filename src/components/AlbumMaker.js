import React from 'react';
import PhotoEntry from './PhotoEntry';
import data from './data/photo-entries'

class AlbumMaker extends React.Component {

  render() {

    var one = 1;
    const two = 2;
    debugger;
    var result = one + two;

    return (
      <div className="flex-container">
        {/*<PhotoEntry src="berlin.jpg" location="Berlin, Germany" caption="Heart of Europe" />*/}
        {
        data.itemlist.map((item) => {
          return <PhotoEntry key={item.src} src={item.src} caption = {item.caption} location={item.location} />
        })
        }
      </div>
    )

  }

}

export default AlbumMaker;
