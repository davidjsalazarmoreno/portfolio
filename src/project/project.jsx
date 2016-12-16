import React from 'react'

export const ProjectComponent = (props) => {
  const { id, image, name, excerpt, information } = props;

  return(
    <div>
      <div id={id} className="ProjectsComponent">
          <div className="main-project-image">
            <img src={image} width="780" alt=""/>
          </div>

          <p className="ProjectExcerpt">
            <h2 className="ProjectName">
              {name}
            </h2>
            {excerpt}
            <ul className="ProjectInformation">
              {
                Object.entries(information).map((entry, index) => {
                  return (
                    <li>
                      <b>{entry[0]}:</b> {entry[1]} 
                    </li>
                  )
                })
              }
            </ul>
          </p>
        </div>
    </div>
  )
}

export default ProjectComponent