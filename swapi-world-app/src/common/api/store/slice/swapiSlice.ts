import { createSlice } from '@reduxjs/toolkit';

import { AppState } from 'common/models';

const initialState: AppState = {
  category: '',
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
