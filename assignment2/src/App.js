import React, { PureComponent } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import { Home } from './views/Home/Home';

export class App extends PureComponent {
  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={Home} />
      </HashRouter>
    );
  }
}
