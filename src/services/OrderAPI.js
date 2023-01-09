import {createApi} from '@reduxjs/toolkit/dist/query/react';
import {baseQuery} from './baseQuery';

export const OrderAPI = createApi({
  baseQuery: baseQuery,
  reducerPath: 'Order',
  endpoints: builder => ({
    orderBill: builder.mutation({
      query: body => ({
        url: 'store-bill',
        body,
        method: 'POST',
      }),
    }),
    getBillUser: builder.query({
      query: params => ({
        url: `get-bill-user`,
      }),
    }),
    gitDiscounts: builder.query({
      query: params => ({
        url: `view-discount`,
      }),
    }),
    updateBill: builder.mutation({
      query: body => ({
        url: `/update-bill-status`,
      }),
      method: 'POST',
    }),
  }),
});

export const {
  useGetBillUserQuery,
  useGitDiscountsQuery,
  useOrderBillMutation,
  useLazyGetBillUserQuery,
  useLazyGitDiscountsQuery,
  useUpdateBillMutation,
} = OrderAPI;
