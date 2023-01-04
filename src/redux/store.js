import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {AuthAPI, LoginAPI, RegisterAPI} from 'src/services';
import {activeMenu, auth} from 'src/redux/slices';

const rootReducer = combineReducers({
  activeMenu,
  auth,

  [AuthAPI.reducerPath]: AuthAPI.reducer,
  [LoginAPI.reducerPath]: LoginAPI.reducer,
  [RegisterAPI.reducerPath]: RegisterAPI.reducer,
});
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
const store = makeStore();

export default store;
