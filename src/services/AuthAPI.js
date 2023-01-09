import {createApi} from '@reduxjs/toolkit/dist/query/react';
import {baseQuery} from './baseQuery';

export const AuthAPI = createApi({
  baseQuery: baseQuery,
  reducerPath: 'AuthAPI',
  endpoints: builder => ({
    getUser: builder.query({
      query: params => ({
        url: '/users',
        params,
      }),
    }),
    updateUser: builder.mutation({
      query: body => ({
        url: '/update-customer',
        body,
        method: 'POST',
      }),
    }),
    changePassword: builder.mutation({
      query: body => ({
        url: '/reset-pass-customer',
        body,
      }),
    }),
    // password_new
    // password_new_confirm
    // password_old

    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useLazyGetUserQuery,
  useLogoutMutation,
  useUpdateUserMutation,
  useChangePasswordMutation,
} = AuthAPI;
