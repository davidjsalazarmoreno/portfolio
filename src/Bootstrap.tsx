// React
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// React intl
import {IntlProvider} from 'react-intl';

import {messages} from './messages';

import {PortfolioComponent} from './portfolio';

ReactDOM.render(
  <IntlProvider locale="en">
    <PortfolioComponent />
  </IntlProvider>,
  document.getElementById('app')
);
      

