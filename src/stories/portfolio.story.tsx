// React
import * as React from 'react';

// React Storybook
import { storiesOf, action, linkTo, module } from '@kadira/storybook';

// Containers/Components
import {PortfolioContainer} from '../portfolio/containers/portfolio/portfolio';

storiesOf('Portfolio Component', module)
  .add('default view', () => {
    return (
      <PortfolioContainer />
    );
  });