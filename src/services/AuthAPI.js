import {createApi} from '@reduxjs/toolkit/dist/query/react';
import {baseQuery} from './baseQuery';

export const AuthAPI = createApi({
  baseQuery: baseQuery,
  reducerPath: 'Auth',
  endpoints: builder => ({
    getUser: builder.query({
      query: params => ({
        url: '/users',
        params,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const {useGetUserQuery, useLazyGetUserQuery, useLogoutMutation} =
  AuthAPI;
