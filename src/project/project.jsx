import React from 'react';

require('./project.scss');

import {LightboxComponent} from '../lightbox/lightbox';

export const ProjectComponent = (props) => {
  const { id, image, name, excerpt, information } = props;

  return(
    <div>
      <div id={id} className="ProjectsComponent">
          <div className="main-project-image">
            <LightboxComponent id={image}  type="image" url={image} alt={excerpt} />
            {/*<img src={image} width="780" alt=""/>*/}
          </div>

          <div className="ProjectExcerpt">
            <h2 className="ProjectName">
              {name}
            </h2>
            <p className="ProjectExcerpt">
              {excerpt}
            </p>
            <ul className="ProjectInformation">
              {
                Object.entries(information).map(([key, value], index) => {
                  return (
                    <li key={`${key}-${Math.random()}`}>
                      <b>{key}:</b> {value} 
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
    </div>
  )
}

export default ProjectComponent