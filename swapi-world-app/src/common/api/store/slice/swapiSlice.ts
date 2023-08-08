import { createSlice } from '@reduxjs/toolkit';

import { IAppState } from 'common/models';
import { CategoriesEnum } from 'common/utils/CategoriesEnum';

const initialState: IAppState = {
  category: CategoriesEnum.planets,
  favorites: {
    planets: [],
    people: [],
    starships: [],
  },
  planets: [],
  people: [],
  warships: [],
};

export const swapiModuleName = 'swapi';

export const swapiSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: swapiModuleName,
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
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
  },
  /* eslint-enable no-param-reassign */
});

export const {
  setCategory,
  addToPlanetsFavorites,
  removeFromPlanetsFavorites,
  setPlanetList,
  addToPeopleFavorites,
  removeFromPeopleFavorites,
  setPeopleList,
} = swapiSlice.actions;
export default swapiSlice.reducer;
