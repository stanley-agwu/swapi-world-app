import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { swapiApi } from 'common/api/services/swapi';

import swapiSliceReducer, { swapiModuleName } from './slice/swapiSlice';

const persistConfig = {
  key: 'root',
  timeout: 0,
  storage,
};

const rootReducer = combineReducers({
  // Add the generated reducer as a specific top-level slice
  [swapiApi.reducerPath]: swapiApi.reducer,
  [swapiModuleName]: swapiSliceReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: persistedReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }).concat(
        swapiApi.middleware
      ),
    preloadedState,
  });

export const store = setupStore();

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
