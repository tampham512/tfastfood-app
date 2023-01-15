import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  AuthAPI,
  LoginAPI,
  RegisterAPI,
  InfoShopAPI,
  ProductAPI,
  OrderAPI,
  ProvincesAPI,
} from 'src/services';

import activeMenuSlice from 'src/redux/slices/activeMenuSlice';
import authSlice from 'src/redux/slices/authSlice';
import cartSlice from 'src/redux/slices/cartSlice';
import favoriteSlice from 'src/redux/slices/favoriteSlice';
import addressSlice from 'src/redux/slices/addressSlice';
import commonSlice from 'src/redux/slices/commonSlice';

const rootReducer = combineReducers({
  activeMenu: activeMenuSlice,
  auth: authSlice,
  favorite: favoriteSlice,
  cart: cartSlice,
  address: addressSlice,
  common: commonSlice,
  [AuthAPI.reducerPath]: AuthAPI.reducer,
  [LoginAPI.reducerPath]: LoginAPI.reducer,
  [RegisterAPI.reducerPath]: RegisterAPI.reducer,
  [InfoShopAPI.reducerPath]: InfoShopAPI.reducer,
  [ProductAPI.reducerPath]: ProductAPI.reducer,
  [OrderAPI.reducerPath]: OrderAPI.reducer,
  [ProvincesAPI.reducerPath]: ProvincesAPI.reducer,
});
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware()
        .concat(ProductAPI.middleware)
        .concat(ProvincesAPI.middleware)
        .concat(LoginAPI.middleware)
        .concat(RegisterAPI.middleware)
        .concat(InfoShopAPI.middleware)
        .concat(OrderAPI.middleware)
        .concat(AuthAPI.middleware),
  });
};
const store = makeStore();

export default store;
