import React, { Component } from 'react';
import SimpleGrid from './pages/simple_grid.jsx';
import Section from './components/section.jsx';

import './App.css';

const DEFAULT_CLASSNAME = 'grid-page';

class App extends Component {
  render() {
    return (
      <div className={DEFAULT_CLASSNAME}>
        <div className={`${DEFAULT_CLASSNAME}__title`}>{`React Grid Examples`}</div>
        <Section
          label={'Simple Grid'}
        >
          <SimpleGrid/>
        </Section>
      </div>
    );
  }
}

export default App;
