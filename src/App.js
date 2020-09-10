import React from 'react';
import Routes from "./routes";
import ErrorBoundary from '../src/components/ErrorBoundry';
import HttpsRedirect from 'react-https-redirect';

const App = (props) => (
  <HttpsRedirect>
  <ErrorBoundary>
    <Routes/>
    </ErrorBoundary>
    </HttpsRedirect>
);


export default App;