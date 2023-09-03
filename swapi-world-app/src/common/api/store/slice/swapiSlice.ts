import { createSlice } from '@reduxjs/toolkit';

import { IAppState, IPerson, IPlanet, IStarship } from 'common/models';

import { getCategoryWithoutFavorites } from '../utils/common';

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
    setPlanetListFromPagination: (state: IAppState, { payload }) => {
      const { data, pageNumber } = payload;
      const favoritesPlanetsList = state.favorites.planets?.map((planet) => planet.name);
      state.planets =
        pageNumber === state.planets.pageNumber
          ? state.planets
          : {
              planetList: getCategoryWithoutFavorites(
                [...state.planets.planetList, ...data],
                favoritesPlanetsList
              ) as IPlanet[],
              pageNumber,
            };
    },
    setPlanetListFromFavorites: (state: IAppState, { payload }) => {
      const { isFavoriteSelected } = payload;
      const favoritesPlanetsList = state.favorites.planets.map((planet) => planet.name);
      state.planets = isFavoriteSelected
        ? {
            planetList: getCategoryWithoutFavorites(
              state.planets.planetList,
              favoritesPlanetsList
            ) as IPlanet[],
            pageNumber: state.planets.pageNumber,
          }
        : state.planets;
    },
    addToPeopleFavorites: (state: IAppState, action) => {
      state.favorites.people = [...state.favorites.people, action.payload];
    },
    removeFromPeopleFavorites: (state: IAppState, { payload }) => {
      const filteredList = state.favorites.people?.filter((favorite) => favorite !== payload);
      state.favorites.people = filteredList;
    },
    setPeopleListFromPagination: (state: IAppState, { payload }) => {
      const { data, pageNumber } = payload;
      state.people =
        pageNumber === state.people.pageNumber
          ? state.people
          : { peopleList: [...state.people.peopleList, ...data], pageNumber };
    },
    setPeopleListFromFavorites: (state: IAppState, { payload }) => {
      const { isFavoriteSelected } = payload;
      const favoritesPeopleList = state.favorites.people.map((person) => person.name);
      state.people = isFavoriteSelected
        ? {
            peopleList: getCategoryWithoutFavorites(
              state.people.peopleList,
              favoritesPeopleList
            ) as IPerson[],
            pageNumber: state.people.pageNumber,
          }
        : state.people;
    },
    addToStarshipFavorites: (state: IAppState, action) => {
      state.favorites.starships = [...state.favorites.starships, action.payload];
    },
    removeFromStarshipFavorites: (state: IAppState, { payload }) => {
      const filteredList = state.favorites.starships?.filter((favorite) => favorite !== payload);
      state.favorites.starships = filteredList;
    },
    setStarshipListFromPagination: (state: IAppState, { payload }) => {
      const { data, pageNumber } = payload;
      state.starships =
        pageNumber === state.starships.pageNumber
          ? state.starships
          : { starshipList: [...state.starships.starshipList, ...data], pageNumber };
    },
    setStarshipListFromFavorites: (state: IAppState, { payload }) => {
      const { isFavoriteSelected } = payload;
      const favoritesStarshipList = state.favorites.starships.map((starship) => starship.name);
      state.starships = isFavoriteSelected
        ? {
            starshipList: getCategoryWithoutFavorites(
              state.starships.starshipList,
              favoritesStarshipList
            ) as IStarship[],
            pageNumber: state.starships.pageNumber,
          }
        : state.starships;
    },
  },
  /* eslint-enable no-param-reassign */
});

export const {
  setCategory,
  addToPlanetsFavorites,
  removeFromPlanetsFavorites,
  setPlanetListFromPagination,
  setPlanetListFromFavorites,
  addToPeopleFavorites,
  removeFromPeopleFavorites,
  setPeopleListFromPagination,
  setPeopleListFromFavorites,
  addToStarshipFavorites,
  removeFromStarshipFavorites,
  setStarshipListFromPagination,
  setStarshipListFromFavorites,
} = swapiSlice.actions;
export default swapiSlice.reducer;
