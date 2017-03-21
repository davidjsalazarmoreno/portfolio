// React
import * as React from 'react';

// Styles
import './social.scss';

export interface ISocialComponentProps {
  id: string;
  networks: Array<{
    url: string;
    iconClassName: string,
    title: string
  }>
};

export const SocialComponent = (props: ISocialComponentProps) => {
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