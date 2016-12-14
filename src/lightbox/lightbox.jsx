import React from 'react';

require('./lightbox.scss');

export const LightboxComponent = (props) => {
  return(
    <a href="#_" className="LightboxComponent">
      <img src={props.url} alt="" />
    </a>
  )
}

export default LightboxComponent;