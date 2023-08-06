import { createSlice } from '@reduxjs/toolkit';

import { IAppState } from 'common/models';
import { CategoriesEnum } from 'common/utils/CategoriesEnum';

const initialState: IAppState = {
  category: CategoriesEnum.planets,
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
  },
  /* eslint-enable no-param-reassign */
});

export const { setCategory } = swapiSlice.actions;
export default swapiSlice.reducer;
