import * as React from 'react';

import {SocialComponent} from './../social/social';

import {networks} from '../../config/index';


import './header.scss';

interface IHeaderComponentProps {
  avatarUrl: string;
};

/**
 * Portfolio Header
 */
export const HeaderComponent = (props: IHeaderComponentProps) => {
  return (
    <header className="HeaderComponent">
      <h1 className="title">
        David Salazar
      </h1>

      <img 
        className="HeaderAvatar" 
        src={props.avatarUrl} 
        width="150" 
        height="150" 
        alt="David Salazar"
       />
      <SocialComponent id="SocialsOnHeader" networks={networks} />
    </header>
        
  )
}

export default HeaderComponent