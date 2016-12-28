import { configure } from '@kadira/storybook';

// require('../node_modules/normalize.css/normalize.css');
function loadStories() {
  require('../src/stories/portfolio.jsx');
}

configure(loadStories, module);
