import {createApi} from '@reduxjs/toolkit/dist/query/react';
import {baseQueryProvince} from './baseQuery';

export const ProvincesAPI = createApi({
  baseQuery: baseQueryProvince,
  reducerPath: 'ProvincesAPI',
  endpoints: builder => ({
    getProvinces: builder.query({
      query: params => ({
        url: '/?depth=3',
      }),
    }),
  }),
});

export const {useGetProvincesQuery, useLazyGetProvincesQuery} = ProvincesAPI;
