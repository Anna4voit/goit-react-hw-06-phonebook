import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import filterReducer from './filter-slice';
import contactsBooksReducer from './contactsBooks-slice';

const rootReducer = combineReducers({
  contacts: contactsBooksReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'contactsList',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
