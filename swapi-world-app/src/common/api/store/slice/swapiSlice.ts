import { createSlice } from '@reduxjs/toolkit';

import { IAppState } from 'common/models';

const initialState: IAppState = {
  category: {},
  favorites: {
    planets: [],
    people: [],
    starships: [],
  },
  planets: {
    planetList: [],
    pageNumber: 0,
  },
  people: {
    peopleList: [],
    pageNumber: 0,
  },
  starships: {
    starshipList: [],
    pageNumber: 0,
  },
};

export const swapiModuleName = 'swapi';

export const swapiSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: swapiModuleName,
  initialState,
  reducers: {
    setCategory: (state: IAppState, action) => {
      state.category = action.payload;
    },
    addToPlanetsFavorites: (state: IAppState, action) => {
      state.favorites.planets = [...state.favorites.planets, action.payload];
    },
    removeFromPlanetsFavorites: (state: IAppState, { payload }) => {
      const filteredList = state.favorites.planets?.filter((favorite) => favorite !== payload);
      state.favorites.planets = filteredList;
    },
    setPlanetList: (state: IAppState, { payload }) => {
      const { data, pageNumber } = payload;
      state.planets =
        pageNumber === state.planets.pageNumber
          ? state.planets
          : { planetList: [...state.planets.planetList, ...data], pageNumber };
    },
    addToPeopleFavorites: (state: IAppState, action) => {
      state.favorites.people = [...state.favorites.people, action.payload];
    },
    removeFromPeopleFavorites: (state: IAppState, { payload }) => {
      const filteredList = state.favorites.people?.filter((favorite) => favorite !== payload);
      state.favorites.people = filteredList;
    },
    setPeopleList: (state: IAppState, { payload }) => {
      const { data, pageNumber } = payload;
      state.people =
        pageNumber === state.people.pageNumber
          ? state.people
          : { peopleList: [...state.people.peopleList, ...data], pageNumber };
    },
    addToStarshipFavorites: (state: IAppState, action) => {
      state.favorites.starships = [...state.favorites.starships, action.payload];
    },
    removeFromStarshipFavorites: (state: IAppState, { payload }) => {
      const filteredList = state.favorites.starships?.filter((favorite) => favorite !== payload);
      state.favorites.starships = filteredList;
    },
    setStarshipList: (state: IAppState, { payload }) => {
      const { data, pageNumber } = payload;
      state.starships =
        pageNumber === state.starships.pageNumber
          ? state.starships
          : { starshipList: [...state.starships.starshipList, ...data], pageNumber };
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
  addToStarshipFavorites,
  removeFromStarshipFavorites,
  setStarshipList,
} = swapiSlice.actions;
export default swapiSlice.reducer;
