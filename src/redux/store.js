import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {AuthAPI, LoginAPI, RegisterAPI} from 'src/services';
// import {activeMenu, auth} from 'src/redux/slices';
import activeMenu from 'src/redux/slices/activeMenuSlice';
import auth from 'src/redux/slices/authSlice';

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
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};
const store = makeStore();

export default store;
