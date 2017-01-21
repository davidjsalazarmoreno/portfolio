import * as React from 'react';

import {SocialComponent} from './../social/social';

import {networks} from '../../config/index';


import './header.scss';

/**
 * Portfolio Header
 */
export const HeaderComponent = (props) => {
  return (
    <header className="HeaderComponent">
      <h1 className="title">
        David Salazar
      </h1>

      {/**<p className="HeaderText">
        <code>let WebDeveloper = Javascript + Nodejs + Php + Love;</code>
      </p> */}
      <img className="HeaderAvatar" src="/avatar.jpg" width="150" height="150" alt="Avatar" />
      <SocialComponent id="SocialsOnFooter" networks={networks} />
    </header>
        
  )
}

export default HeaderComponent