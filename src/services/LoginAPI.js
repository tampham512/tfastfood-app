import {createApi} from '@reduxjs/toolkit/dist/query/react';
import {baseQueryWithoutToken} from './baseQuery';

export const LoginAPI = createApi({
  baseQuery: baseQueryWithoutToken,
  reducerPath: 'LoginAPI',
  endpoints: builder => ({
    getTokenLogin: builder.mutation({
      query: body => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {useGetTokenLoginMutation} = LoginAPI;
