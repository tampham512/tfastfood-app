import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchBaseQuery} from '@reduxjs/toolkit/query';
import Constant from 'src/controller/Constant';

export const baseQuery = fetchBaseQuery({
  baseUrl: Constant.REACT_APP_API,
  prepareHeaders: async headers => {
    const token = await AsyncStorage.getItem('accessToken');
    console.log('🚀 ~ file: baseQuery.js:8 ~ token', token);

    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');
    if (token) {
      headers.set('Authorization', `Bearer ${JSON.parse(token)}`);
    }
    return headers;
  },
  cache: 'no-cache',
});

export const baseQueryWithoutToken = fetchBaseQuery({
  baseUrl: Constant.REACT_APP_API,
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
