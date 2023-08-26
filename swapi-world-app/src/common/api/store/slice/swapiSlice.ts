import { createSlice } from '@reduxjs/toolkit';

import { IAppState } from 'common/models';
import { CategoriesEnum } from 'common/utils/CategoriesEnum';

const initialState: IAppState = {
  category: {
    dashboard: CategoriesEnum.planets,
    details: '',
  },
  favorites: {
    planets: [],
    people: [],
    starships: [],
  },
  planets: [],
  people: [],
  starships: [],
};

export const swapiModuleName = 'swapi';

export const swapiSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: swapiModuleName,
  initialState,
  reducers: {
    setDashboardCategory: (state, action) => {
      state.category = { ...state.category, dashboard: action.payload };
    },
    addToPlanetsFavorites: (state, action) => {
      state.favorites.planets = [...state.favorites.planets, action.payload];
    },
    removeFromPlanetsFavorites: (state, { payload }) => {
      const filteredList = state.favorites.planets?.filter((favorite) => favorite !== payload);
      state.favorites.planets = filteredList;
    },
    setPlanetList: (state, { payload }) => {
      state.planets = [...state.planets, ...payload];
    },
    addToPeopleFavorites: (state, action) => {
      state.favorites.people = [...state.favorites.people, action.payload];
    },
    removeFromPeopleFavorites: (state, { payload }) => {
      const filteredList = state.favorites.people?.filter((favorite) => favorite !== payload);
      state.favorites.people = filteredList;
    },
    setPeopleList: (state, { payload }) => {
      state.people = [...state.people, ...payload];
    },
    addToStarshipFavorites: (state, action) => {
      state.favorites.starships = [...state.favorites.starships, action.payload];
    },
    removeFromStarshipFavorites: (state, { payload }) => {
      const filteredList = state.favorites.starships?.filter((favorite) => favorite !== payload);
      state.favorites.starships = filteredList;
    },
    setStarshipList: (state, { payload }) => {
      state.starships = [...state.starships, ...payload];
    },
  },
  /* eslint-enable no-param-reassign */
});

export const {
  setDashboardCategory,
  addToPlanetsFavorites,
  removeFromPlanetsFavorites,
  setPlanetList,
  addToPeopleFavorites,
  removeFromPeopleFavorites,
  setPeopleList,
  addToStarshipFavorites,
  removeFromStarshipFavorites,
  setStarshipList,
} = swapiSlice.actions;
export default swapiSlice.reducer;
