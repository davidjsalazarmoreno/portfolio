// React
import React from 'react';

// React Storybook
import { storiesOf, action, linkTo } from '@kadira/storybook';

// Components
import {PortfolioComponent} from '../portfolio.jsx';

storiesOf('Portfolio Component', module)
  .add('default view', () => {
    return (
      <div>
        <PortfolioComponent />
      </div>
    );
  });