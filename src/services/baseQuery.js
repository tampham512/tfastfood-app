import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchBaseQuery} from '@reduxjs/toolkit/query';

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL + '',
  prepareHeaders: headers => {
    const token = AsyncStorage.getItem('accessToken');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
  cache: 'no-cache',
});

export const baseQueryWithoutToken = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL + '',
});
export const baseQueryProvince = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL_PROVINCE + '',
});
