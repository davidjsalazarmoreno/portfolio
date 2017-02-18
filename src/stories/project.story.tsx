// React
import * as React from 'react';

// React Storybook
import { storiesOf, action, linkTo, module } from '@kadira/storybook';

// Containers/Components
import {ProjectComponent} from '../portfolio/components/project/project';

storiesOf('Project Component', module)
  .add('default view', () => {
    return (
      <ProjectComponent id="" key="" excerpt="" image="" information={[{ key: '', value: '' }]} name=""  />
    );
  });