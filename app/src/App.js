import React, { Component } from 'react';
import logo from './logo.svg';
import SimpleGrid from './pages/simple_grid.jsx';
import Section from './components/section.jsx';

import './App.css';

const DEFAULT_CLASSNAME = 'grid-page';

class App extends Component {
  render() {
    return (
      <div className={DEFAULT_CLASSNAME}>
        <Section>
          <SimpleGrid/>
        </Section>
      </div>
    );
  }
}

export default App;
