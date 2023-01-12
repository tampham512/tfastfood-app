import {createApi} from '@reduxjs/toolkit/dist/query/react';
import {baseQueryWithoutToken} from './baseQuery';

export const RegisterAPI = createApi({
  baseQuery: baseQueryWithoutToken,
  reducerPath: 'RegisterAPI',
  endpoints: builder => ({
    registerAccount: builder.mutation({
      query: body => ({
        url: '/register',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {useRegisterAccountMutation} = RegisterAPI;
