// React
import * as React from 'react';

// React Intl
import {injectIntl, InjectedIntl, Messages} from 'react-intl';

// Styles
import './language-selector.scss';

interface ILanguageSelectorComponentProps {
  languages?: string[];
  selected?: string;
  intl?: InjectedIntl;
  messages: Messages;
  onChange?: ( event ) => void;
};

const LanguageSelector = ( props: ILanguageSelectorComponentProps ) => {
  const { languages, onChange, selected, intl, messages } = props;
  
  return (
    <div className="LanguageSelectorComponent">
      <i className="fa fa-language" aria-hidden="true"></i>
      <select name="LanguageSelector" id="LanguageSelector" onChange={onChange} defaultValue={selected}>
         {
          languages.map((value, index) => {
            return (
              <option 
                key={index} 
                value={value}>
                {
                  intl.formatMessage( messages[ value ] )
                }
              </option>
            );
          })
        }
      </select>
    </div>
  )
};



export const LanguageSelectorComponent = injectIntl(LanguageSelector);
export default LanguageSelectorComponent;