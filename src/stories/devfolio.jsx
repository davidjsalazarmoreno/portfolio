// React
import React from 'react';

// React Storybook
import { storiesOf, action, linkTo } from '@kadira/storybook';

// Components
import {DevfolioComponent} from '../devfolio.jsx';

storiesOf('Devfolio Component', module)
  .add('default view', () => {
    return (
      <div>
        <DevfolioComponent />
      </div>
    );
  });