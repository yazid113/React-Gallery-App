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

        />
    )
  }
  else{
    photos = <NoPhoto />
  }
  
  

  return(
    <ul>
        {photos}
    </ul> 
  );
}

export default PhotoContainer;