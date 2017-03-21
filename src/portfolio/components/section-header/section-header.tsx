import * as React from 'react';

import {FlatSeparatorComponent} from './../flat-separator/flat-separator';

import './section-header.scss';

interface ISectionHeaderComponent {
  title: string | JSX.Element; 
};

export const SectionHeaderComponent = (props) => {
  return(
    <div className="SectionHeaderComponent">
      <h1 id="portfolio">
        {props.title}
      </h1>
      <FlatSeparatorComponent margin="0 0" width="20%" />
    </div>
  );
}

export default SectionHeaderComponent;