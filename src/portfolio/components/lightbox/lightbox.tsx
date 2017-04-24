// React
import * as React from 'react';

// React intl
import {FormattedMessage} from 'react-intl';

// React Lazy Load
const LazyLoad = require('react-lazyload').default;

import './lightbox.scss';

export class LightboxComponent extends React.Component<any, any> {
  state = {
    visible: false,
    isLoading: true
  };

  constructor(props) {
    super(props);

    // Render Methods
    this.renderImageLightbox = this.renderImageLightbox.bind(this);
    this.renderYoutubeLightbox = this.renderYoutubeLightbox.bind(this);

    // State getters/setters
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  componentDidUpdate (prevProps, prevState) {
    if ( this.state.visible ) {
      document.querySelector('.MenuComponent').classList.add('isNotDisplayed');
    } else {
      document.querySelector('.MenuComponent').classList.remove('isNotDisplayed');

    }
  }
  

  toggleVisibility() {
    const newState = { ...this.state, visible: !this.state.visible };

    this.setState(newState);
  }

  renderImageLightbox() {
    // Props
    const { url, alt } = this.props;

    // State
    const { visible } = this.state;

    // State getters/setters
    const { toggleVisibility } = this;

    if( !visible ) {
      return null;
    }

    return (
      <div className="Lightbox">
        <i className="fa fa-close" onClick={(e) => {
          e.preventDefault();

          toggleVisibility();
        }}></i>
        <figure>
          <img src={url} alt={alt} onClick={(e) => {
            e.preventDefault();

            toggleVisibility();
          }} />

          <figcaption>{alt}</figcaption>
          
        </figure>
      </div>
    )
  }

  renderYoutubeLightbox() {
    // Props
    const { url, alt } = this.props;

    // State
    const { visible } = this.state;

    // State getters/setters
    const { toggleVisibility } = this;

    if( !visible ) {
      return null;
    }

    return (
      <div key={`${url}`} className="Lightbox">

        <i className="fa fa-close" onClick={(e) => {
          e.preventDefault();

          toggleVisibility();
        }}></i>
        <figure>

          {this.state.isLoading && <h2>
            <FormattedMessage id="general.loadingVideo" /> 
            <i className="fa fa-circle-o-notch fa-spin fa-fw"></i>
          </h2>}
          {/* /Video Loading Spinner */}

          <iframe 
            src={`https://www.youtube.com/embed/${url}`} 
            width="640" 
            height="480" 
            frameBorder="0" 
            allowFullScreen
            onLoad={() => {
              if ( !!this.state.isLoading ) {
                console.info('Iframe onload');
                const newState = { ...this.state, isLoading: false };
                this.setState(newState);
              }
            }}
          >
          </iframe>
          <figcaption>{alt}</figcaption>
          {/* /Youtube player and caption*/}
        
        </figure>
      </div>
    )
  }

  render() {
    // Props
    const { type, url, alt, id } = this.props;

    // State
    const { visible } = this.state;

    // Render Methods
    const { renderImageLightbox, renderYoutubeLightbox } = this;

    // State getters/setters
    const { toggleVisibility } = this;

    const dispatchTable = {
      'image': renderImageLightbox,
      'youtube': renderYoutubeLightbox
    };
    
    return(
      <div key={`${url}-${Math.random()}`} id={id} className="LightboxComponent">
        <a 
          href={ type === 'youtube' ? `https://www.youtube.com/watch?v=${url}` : `${url}` } 
          className="Thumbnail" 
          onClick={(e) => {
            if ( type === 'youtube' && window.matchMedia('(max-width: 768px)').matches ) {
              return;
            } else {
              e.preventDefault();
              toggleVisibility();
            }

          }}
          target="_blank"
        >
          <LazyLoad offset={100} placeholder={
            <div className="placeholder">
              <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
            </div>
          }>
            <img 
              src={ type === 'youtube' ? `http://img.youtube.com/vi/${url}/mqdefault.jpg` : `${url}` } 
              style={{
                width: this.props.width || '100%',
                height: this.props.height || '100%'
              }}   
            />
          
          </LazyLoad>
        </a>
        {/* /Lightbox Thumbnail */}
      
          {dispatchTable[ type ]()}
        
        {/* Rendering lightbox by type prop*/}
      </div>
    );
  }
}


export default LightboxComponent;