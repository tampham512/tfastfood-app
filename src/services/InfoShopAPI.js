import {createApi} from '@reduxjs/toolkit/dist/query/react';
import {baseQuery} from './baseQuery';

export const InfoShopAPI = createApi({
  baseQuery: baseQuery,
  reducerPath: 'InfoShop',
  endpoints: builder => ({
    getInfoShop: builder.query({
      query: params => ({
        url: '/get-infoshop',
        params,
      }),
    }),
  }),
});

export const {useGetInfoShopQuery, useLazyGetInfoShopQuery} = InfoShopAPI;
