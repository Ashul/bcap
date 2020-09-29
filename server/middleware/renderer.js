import React from 'react';
import ReactDOMServer from 'react-dom/server';
// import Helmet from 'react-helmet';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import url from 'url';

// import our main App component
import App from '../../src/App';
import { activeRoutes } from '../../src/routesList';
import {store} from "../../src/store/store";
import { Routes } from '../../src/serverRoutes';

const path = require('path');
const fs = require('fs');
const injectHTML = require('../utility').injectHTML;

const generatePrerequisite = async (req, store) => {
  const resObj = {
    isServerRoute: false,
    manifest: null,
  };
  for (const route of Routes) {
    const match = matchPath(req.url, route);
    if (match) {
      const { params } = match;
      try {
        const manifest = {};
        let res;
        // if (route.isParams) {
        //   res = await route.loadData(store, params);
        // } else {
        //   res = await route.loadData(store);
        // }
        resObj.isServerRoute = true;
        resObj.manifest = manifest;
        return resObj;
      } catch (e) {
        if (e && e.response && [403].includes(e.response.status)) {
          return { error: '404' };
        }
        console.log('\x1b[41m', `Error while loading prerequisite data ${e}`, '\x1b[40m');
        return e;
      }
    }
  }
  return resObj;
};

export default (req, res, next) => {
  const context = {};
  // create store
//   const store = serverCreateStore();

  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, '../../build/index.html');

  // match Route and generate required Data before actual Rendering
  generatePrerequisite(req, store)
    .then((resObj) => {
      if (resObj.error && resObj.error === '404') {
        return res.status(404).sendFile(path.resolve(__dirname, '../build/index.html'));
      } else if (!resObj.isServerRoute) {
        let isReactRoute = false;
        for (const route of activeRoutes) {
          const matchUrl = url.parse(req.url).pathname;
          const match = matchPath(matchUrl, route);
          if (match) {
            isReactRoute = true;
          }
        }
        if (isReactRoute) {
          res.sendFile(path.resolve(__dirname, '../../build/index.html'));
        } else {
          return res.status(404).sendFile(path.resolve(__dirname, '../../build/index.html'));
        }
      } else {
        fs.readFile(filePath, 'utf8', (err, htmlData) => {
          if (err) {
            console.error('err', err);
            return res.status(404).end();
          }
          // render the app as a string
          const view = ReactDOMServer.renderToString(
            <Provider store={store}>
              <StaticRouter location={req.url} context={context}>
                <App manifest={resObj.manifest} />
              </StaticRouter>
            </Provider>
          );
          // inject the rendered app into our html and send it
          if (context.url) {
            res.writeHead(301, {
              Location: context.url,
            });
            res.end();
          } else {
            // We need to tell Helmet to compute the right meta tags, title, and such
            const storeData = store.getState();
            // const helmet = Helmet.renderStatic();
            const html = injectHTML(htmlData, {
            //   html: helmet.htmlAttributes.toString(),
            //   title: helmet.title.toString(),
            //   meta: helmet.meta.toString(),
            //   link: helmet.link.toString(),
              body: view,
              scripts: [],
              // state: JSON.stringify(''),
              state: JSON.stringify({ commonReducer: storeData.commonReducer }).replace(/</g, '\\u003c'),
            });
            return res.send(html);
          }
        });
      }
    })
    .catch(e => {
      console.log('error', e);
      res.send('err0r page');
    });
};
