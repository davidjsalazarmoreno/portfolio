import * as React from 'react';

import {LightboxComponent} from '../lightbox/lightbox';

require('./showcase.scss');


export const ShowcaseComponent = (props) => {
  // Props
  const { title, elements, emptyStateText } = props;

  if ( elements.length === 0 ) {
    return (
      <div id={`${props.id | title}`} className="ShowcaseComponent">
        <h3>{title}</h3>
        <p>{emptyStateText}</p>
      </div>
    )
  }

  return (
    <div id={`${props.id | title}`} className="ShowcaseComponent">
      <h3>{title}</h3>

      <div className="Thumbnails" style={{
        columnCount: props.columnCount || '4'
      }}>
        {
          props.elements.map((element) => <LightboxComponent key={`${element.url}`} {...element} />)
        }
      </div>
    </div>
  )
}

export default ShowcaseComponent