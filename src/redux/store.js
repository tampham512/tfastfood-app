import {combineReducers, configureStore} from '@reduxjs/toolkit';
import activeMenu from '../redux/slices/activeMenuSlice';
const rootReducer = combineReducers({
  activeMenu,
});
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
const store = makeStore();

export default store;
