import React from 'react';

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

const UserContext = React.createContext();
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;
const JiraUserProvider = UserContext.Provider;
const JiraUserConsumer = UserContext.Consumer;
const ConfluUserProvider = UserContext.Provider;
const ConfluUserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer, JiraUserProvider,JiraUserConsumer, ConfluUserProvider, ConfluUserConsumer}