import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { history } from './helpers';
import { App } from './App';

// attempt silent token refresh before startup
//userService.refreshToken().finally(startApp);
startApp();

function startApp() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  );
}
