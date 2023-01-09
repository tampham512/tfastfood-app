import {createApi} from '@reduxjs/toolkit/dist/query/react';
import {baseQueryProvince} from './baseQuery';

export const ProvincesAPI = createApi({
  baseQuery: baseQueryProvince,
  reducerPath: 'Provinces',
  endpoints: builder => ({
    getProvinces: builder.query({
      query: params => ({
        url: '/get-infoshop/?depth=3',
        params,
      }),
    }),
  }),
});

export const {useGetProvincesQuery, useLazyGetProvincesQuery} = ProvincesAPI;
