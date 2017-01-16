// React
import * as React from 'react';

// React intl
import {IntlProvider} from 'react-intl';

// React Storybook
import { storiesOf, action, linkTo, module } from '@kadira/storybook';

// Components
import {PortfolioComponent} from '../portfolio';

storiesOf('Portfolio Component', module)
  .add('default view', () => {
    return (
      <IntlProvider locale="en">
        <PortfolioComponent />
      </IntlProvider>
    );
  })
  .add('locale es', () => {
    return (
      <IntlProvider locale="es">
        <PortfolioComponent />
      </IntlProvider>
    );
  });