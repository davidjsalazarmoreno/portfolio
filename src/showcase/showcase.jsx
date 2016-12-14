import React from 'react'

require('./showcase.scss');

import {LightboxComponent} from '../lightbox/lightbox';

// figcaption
const showCaseElementDispatch = {
  'image': ({url, id, alt}) => {
    return (
      <a href={url} className="Thumbnail" target="_blank">
        <img src={url} alt={alt} width="60" height="50" />
      </a>
    )
  },
  'youtube': ({url}) => {
    return (
      <a className="Thumbnail" href={`https://www.youtube.com/watch?v=${url}`} target="_blank">
        <img src={`http://img.youtube.com/vi/${url}/default.jpg`} width="60" height="50" />
        {/*<iframe className="Thumbnail" src={`https://www.youtube.com/embed/${url}`} width="50" height="50" frameBorder="0" allowFullScreen></iframe>*/}
      </a>
    );
  }
};

export const ShowcaseComponent = (props) => {
  // Props
  const { title, elements, emptyStateText } = props;

  if ( elements.length === 0 ) {
    return (
      <div id={props.id | title} className="ShowcaseComponent">
        <h3>{title}</h3>
        <p>{emptyStateText}</p>
      </div>
    )
  }

  return (
    <div id={props.id | title} className="ShowcaseComponent">
      <h3>{title}</h3>

      <div className="Thumbnails">
        {
          props.elements.map((element) => showCaseElementDispatch[element.type](element) )
        }
      </div>
    </div>
  )
}

export default ShowcaseComponent