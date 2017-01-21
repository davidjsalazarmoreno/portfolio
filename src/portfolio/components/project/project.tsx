import * as React from 'react';

require('./project.scss');

import {LightboxComponent} from '../lightbox/lightbox';

type TProjectInformationNames = 'Client' | 'Period' | 'Work Type' | 'Role' | 'Technologies used' | 'Company Website';

interface IProjectComponentProps {
  id: string;
  image: string | JSX.Element;
  name: string | JSX.Element;
  excerpt: string | JSX.Element;
  information: Array<{ key: string | JSX.Element, value: string | JSX.Element }>;
};

export const ProjectComponent = ( props: IProjectComponentProps ) => {
  const { id, image, name, excerpt, information } = props;

  return(
    <div>
      <div id={id} className="ProjectsComponent">
          <div className="main-project-image">
            <LightboxComponent id={image}  type="image" url={image} alt={excerpt} />
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
                information.map(({key, value}, index) => {
                  return (
                    <li key={`${key}-${index}`}>
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