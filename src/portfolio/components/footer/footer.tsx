import * as React from 'react';

import {SocialComponent} from './../social/social';
import {FlatSeparatorComponent} from './../flat-separator/flat-separator';

import {networks} from '../../config/index';

import './footer.scss';

/**
 * Portfolio Header
 */
export const FooterComponent = (props) => {
  return (
    <footer className="FooterComponent">
      <p>
        <a href="mailto:davidjsalazarmoreno@gmail.com?subject=Awesome%20Project">
          <i className="fa fa-envelope-o"></i>
          <br/>
          Contact me
        </a>
      </p>
      
      <FlatSeparatorComponent margin="8px auto" width="13%" />

      <SocialComponent id="SocialsOnFooter" networks={networks} />
      
      <small className="footnote">
        <hr />
        <a href="https://github.com/davidjsalazarmoreno/portfolio">
          Made with <i className="fa fa-heart" title="Love" /> and React.js
        </a>
        | 
        The styles are inspired by <a href="http://www.hamvocke.com/">hamvocke</a> 
      </small>
    </footer> 
  );
}

export default FooterComponent;

