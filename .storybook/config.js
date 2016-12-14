import { configure } from '@kadira/storybook';

// require('../node_modules/normalize.css/normalize.css');
function loadStories() {
  require('../src/stories/devfolio.jsx');
}

configure(loadStories, module);
