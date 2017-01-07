import * as React from 'react';

require('./language-selector.scss');


export const LanguageSelectorComponent = (props) => {
  return (
    <div className="LanguageSelectorComponent">
      <i className="fa fa-language" aria-hidden="true"></i>
      <span>English</span>
    </div>  
  )
};




export default LanguageSelectorComponent