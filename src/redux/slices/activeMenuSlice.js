import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  menu: '',
};
const activeMenuSlice = createSlice({
  name: 'activeMenu',
  initialState,
  reducer: {
    setActiveMenu: (state, action) => {
      state.menu = action.payload.menu;
    },
    clear: initialState,
  },
});
const {actions, reducer} = activeMenuSlice;
export const {setActiveMenu} = actions;
export default reducer;
