import React from 'react';

require('./lightbox.scss');

export class LightboxComponent extends React.Component {
  state = {
    visible: false
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
      <div className="Lightbox">
        <i className="fa fa-close" onClick={(e) => {
          e.preventDefault();

          toggleVisibility();
        }}></i>
        <figure>
          <iframe src={`https://www.youtube.com/embed/${url}`} width="800" height="600" frameBorder="0" allowFullScreen></iframe>
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
      <div key={`${url}-${Math.random()}`} id={id} className="LightboxComponent">
        <a href={url} className="Thumbnail" onClick={(e) => {
          e.preventDefault();

          toggleVisibility();
        }}>
         <img src={ type === 'youtube' ? `http://img.youtube.com/vi/${url}/default.jpg` : url } />
        </a>
        {/* /Lightbox Thumbnail */}

        {/* Rendering lightbox by type prop*/}
        {dispatchTable[ type ]()}
      </div>
    );
  }
}


export default LightboxComponent;