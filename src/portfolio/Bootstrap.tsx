// React
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// React Intl
import {injectIntl} from 'react-intl';

// Containers/Components
import {PortfolioContainer} from './containers/portfolio/portfolio';

(window as any).addEventListener('load', function() {
  ReactDOM.render(
    <PortfolioContainer />,
    document.getElementById('app')
  );

});
