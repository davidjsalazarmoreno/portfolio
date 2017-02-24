import * as React from 'react';

import {SocialComponent} from './../social/social';
import {FlatSeparatorComponent} from './../flat-separator/flat-separator';

import './footer.scss';

interface IFooterComponent {
  contactMe: string | JSX.Element;
  made: string | JSX.Element;
  inspiration: string | JSX.Element;
  networks: any;
};

/**
 * Portfolio Header
 */
export const FooterComponent = (props: IFooterComponent) => {
  return (
    <footer className="FooterComponent">
      <p>
        <a href="mailto:davidjsalazarmoreno@gmail.com?subject=Awesome%20Project">
          <i className="fa fa-envelope-o"></i>
          <br/>
          {props.contactMe}
        </a>
      </p>
      
      <FlatSeparatorComponent margin="8px auto" width="13%" />
      
      <SocialComponent id="SocialsOnFooter" networks={props.networks} />
      
      <small className="footnote">
        <hr />
        <a href="https://github.com/davidjsalazarmoreno/portfolio">
          {props.made}
        </a>

        <span className="pipe">|</span>

        {props.inspiration} 
      </small>
    </footer> 
  );
}

export default FooterComponent;

