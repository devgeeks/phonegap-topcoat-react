import { configure } from '@kadira/storybook';

import './topcoat-0.8.0/css/topcoat-mobile-light.css';

function loadStories() {
  require('../src/components/Button/stories');
  require('../src/components/TabBar/stories');
}

configure(loadStories, module);
