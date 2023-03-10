import {createApi} from '@reduxjs/toolkit/dist/query/react';
import {baseQuery} from './baseQuery';

export const OrderAPI = createApi({
  baseQuery: baseQuery,
  reducerPath: 'OrderAPI',
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
    getDiscounts: builder.query({
      query: params => ({
        url: `view-discount`,
      }),
    }),
    updateBill: builder.mutation({
      query: body => ({
        url: `/update-bill-status`,
        body,
        method: 'POST',
      }),
    }),
    reviewProduct: builder.mutation({
      query: body => ({
        url: `/store-review`,
        body,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetBillUserQuery,
  useGetDiscountsQuery,
  useOrderBillMutation,
  useLazyGetBillUserQuery,
  useLazyGetDiscountsQuery,
  useUpdateBillMutation,
  useReviewProductMutation,
} = OrderAPI;
