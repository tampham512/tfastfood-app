import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchBaseQuery} from '@reduxjs/toolkit/query';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://tfastfood.tk/api',
  prepareHeaders: headers => {
    const token = AsyncStorage.getItem('accessToken');
    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
  cache: 'no-cache',
});

export const baseQueryWithoutToken = fetchBaseQuery({
  baseUrl: 'https://tfastfood.tk/api',
  prepareHeaders: headers => {
    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});
export const baseQueryProvince = fetchBaseQuery({
  baseUrl: 'https://provinces.open-api.vn/api',
  prepareHeaders: headers => {
    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});
