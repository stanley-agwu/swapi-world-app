import { createSlice } from '@reduxjs/toolkit';

import { IAppState } from 'common/models';
import { CategoriesEnum } from 'common/utils/CategoriesEnum';

const initialState: IAppState = {
  category: CategoriesEnum.planets,
  favorites: [],
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
    addToFavorites: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFromFavorites: (state, { payload }) => {
      const filteredList = state.favorites?.filter((favorite) => favorite !== payload);
      state.favorites = filteredList;
    },
  },
  /* eslint-enable no-param-reassign */
});

export const { setCategory, addToFavorites, removeFromFavorites } = swapiSlice.actions;
export default swapiSlice.reducer;
