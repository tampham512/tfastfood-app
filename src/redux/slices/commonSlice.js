import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  pathHistory: '',
};
export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    updatePathHistory: (state, action) => {
      const pathHistory = action.payload.pathHistory;
      console.log(pathHistory);
      state.pathHistory = pathHistory;
    },
    removePathHistory: state => {
      state.pathHistory = '';
    },
  },
});

const {actions, reducer} = commonSlice;

export const {updatePathHistory, removePathHistory} = actions;
export default reducer;
