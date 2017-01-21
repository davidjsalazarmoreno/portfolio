import * as React from 'react';

import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const LazyLoad = require('react-lazyload').default;

require('./lightbox.scss');

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
        {this.state.isLoading && "Loading video, please wait..."}

        <i className="fa fa-close" onClick={(e) => {
          e.preventDefault();

          toggleVisibility();
        }}></i>
        <figure>
          <iframe 
            src={`https://www.youtube.com/embed/${url}`} 
            width="640" 
            height="480" 
            frameBorder="0" 
            allowFullScreen
            onLoad={() => {
              const newState = { ...this.state, isLoading: false };
              this.setState(newState);
            }}
          >
          </iframe>
          <figcaption>{alt}</figcaption>
        
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
        // <ReactCSSTransitionGroup
        //   transitionName="example"
        //       transitionAppear={false}
        //   transitionEnterTimeout={0}
        //   transitionLeaveTimeout={0}
        // >
      <div key={`${url}-${Math.random()}`} id={id} className="LightboxComponent">
        <a 
          href={ type === 'youtube' ? `https://www.youtube.com/watch?v=${url}` : `${url}` } 
          className="Thumbnail" 
          onClick={(e) => {
            e.preventDefault();

            toggleVisibility();
          }}
        >
          <LazyLoad>
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
        // </ReactCSSTransitionGroup>
    );
  }
}


export default LightboxComponent;