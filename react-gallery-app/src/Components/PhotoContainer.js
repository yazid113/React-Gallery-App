import React from 'react';
import Photo from './Photo';
import NoPhoto from './NoPhoto';


const PhotoContainer = (props) => { 
  let photos;
  const results = props.data
  if (results.length > 0) {
    photos = results.map(photo =>
      <Photo 
        url = { `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg` }
        key = { photo.id }
        title = {photo.title}
        />
    )
  }
  else{
    photos = <NoPhoto />
  }
  
  

  return(
    
  <div className="photo-container">
      <h2>Photos of {props.title}</h2>
        <ul>
            { photos }
        </ul>
  </div>
  );
}

export default PhotoContainer;