import React from 'react';
import PhotoComponent from './PhotoComponent';
import entries from './data/photos.json';

class Album extends React.Component {
    constructor(props){
        super(props);
    }



  render() {
    const imgUrl = `https://picsum.photos/id/200/`;
    // let randIdx = choice();
    // let finalImg = `${imgUrl}${randIdx}`;
    return (
      <div className="flex-container">
          {
              entries.itemlist.map((photo) => {
                  return (
                      <PhotoComponent 
                        key = {photo.id}
                        src = {photo.id}
                        // location = {photo.location}
                        // caption = {photo.caption}
                    />
                  )
              })
          }
      </div>

    )

  }

}

export default Album;
