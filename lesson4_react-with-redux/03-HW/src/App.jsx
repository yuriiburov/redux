import React from 'react';
import { Provider } from 'react-redux';
import users from './users';
import UsersList from './users/UsersList';
import store from './store';

const App = () => (
  <Provider store={store}>
    <UsersList users={users} />
  </Provider>
);

// REACT APPROACH
// 0. make a layout
// 1. split on components
// 2. static version in react
// 3. declare state and props
// 4. write logic

export default App;
