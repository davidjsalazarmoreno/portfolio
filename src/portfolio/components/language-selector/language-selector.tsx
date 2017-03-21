// React
import * as React from 'react';

// React Intl
import {injectIntl, InjectedIntl, Messages} from 'react-intl';

// Styles
import './language-selector.scss';

interface ILanguageSelectorComponentProps {
  languages?: string[];
  languageLabel: string | JSX.Element;
  selected?: string;
  intl?: InjectedIntl;
  onChange?: ( event ) => void;
};

const LanguageSelector = ( props: ILanguageSelectorComponentProps ) => {
  const { languages, onChange, selected, intl, languageLabel } = props;
  
  return (
    <div className="LanguageSelectorComponent">
      <i className="fa fa-language" aria-hidden="true"></i>
      {/*<span className="languageSelectorLabel">{languageLabel}</span>*/}
      <select name="LanguageSelector" id="LanguageSelector" onChange={onChange} defaultValue={selected}>
         {
          languages.map((value, index) => {
            return (
              <option 
                key={index} 
                value={value}>
                {
                  intl.formatMessage( { id: `general.${value}` } )
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