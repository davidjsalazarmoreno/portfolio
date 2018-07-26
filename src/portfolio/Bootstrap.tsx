import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { PortfolioContainer } from './containers/portfolio/portfolio';

const APP_CONTAINER_ID = 'app';

(window as Window).addEventListener('load', () => {
  ReactDOM.render(
    <PortfolioContainer />,
    document.getElementById(APP_CONTAINER_ID)
  );
});
