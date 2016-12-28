import React from 'react'

import {FlatSeparatorComponent} from './../flat-separator/flat-separator';

require('./filters.scss');

export const FiltersComponent = (props) => {
  return(
    <div className="FiltersComponent">
      <h1>My Work</h1>
      <FlatSeparatorComponent margin="0 0" width="20%" />
      {/*<div>
        <span>All</span>
        <span>Professionals</span>
        <span>Personals</span>
      </div>*/}
    </div>
  );
}

export default FiltersComponent;