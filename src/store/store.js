import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import {createLogger} from 'redux-logger';

const devToolPlugin = typeof window !== "undefined" ? (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) : undefined;

export const store = createStore(
  reducer,
    devToolPlugin,
);
// const middleware = [];
// middleware.push(thunk);

// const loggerMiddleware = createLogger({
//   predicate: () => process.env.NODE_ENV !== 'production',
// });
// middleware.push(loggerMiddleware);

// const store = createStore(
//   reducer,
//   compose(
//     applyMiddleware(...middleware),
//   )
// );

export default store;