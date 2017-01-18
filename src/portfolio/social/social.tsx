import * as React from 'react';

require('./social.scss');

export const SocialComponent = (props) => {
  // Props
  const { id, networks } = props;

  return (
    <div id={id} className="SocialComponent">
      {
        networks.map(({url, iconClassName, title}, index) => 
          <span key={`${index}`}>
            <a href={url}>
              <i className={iconClassName} title={title}></i>
            </a>
          </span>
        )
      }
    </div>
  )
};

export default SocialComponent