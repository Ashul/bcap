import React from 'react';
import Routes from "./routes";
import ErrorBoundary from '../src/components/ErrorBoundry';

const App = (props) => (
  <ErrorBoundary>
    <Routes/>
  </ErrorBoundary>
);


export default App;