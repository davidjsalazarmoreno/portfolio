import { configure } from '@kadira/storybook';

import 'normalize.css/normalize.css';

function loadStories() {
  require('../src/stories/project.story');
}

configure(loadStories, module);
