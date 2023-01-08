import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {AuthAPI, LoginAPI, RegisterAPI} from 'src/services';
// import {activeMenu, auth} from 'src/redux/slices';
import activeMenuSlice from 'src/redux/slices/activeMenuSlice';
import authSlice from 'src/redux/slices/authSlice';

const rootReducer = combineReducers({
  activeMenu: activeMenuSlice,
  auth: authSlice,

  [AuthAPI.reducerPath]: AuthAPI.reducer,
  [LoginAPI.reducerPath]: LoginAPI.reducer,
  [RegisterAPI.reducerPath]: RegisterAPI.reducer,
});
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};
const store = makeStore();

export default store;
