import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';

import { swapiApi } from 'common/api/services/swapi';

import swapiSliceReducer, { swapiModuleName } from './slice/swapiSlice';

const rootReducer = combineReducers({
  // Add the generated reducer as a specific top-level slice
  [swapiApi.reducerPath]: swapiApi.reducer,
  [swapiModuleName]: swapiSliceReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(swapiApi.middleware),
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
