import {createApi} from '@reduxjs/toolkit/dist/query/react';
import {baseQuery} from './baseQuery';

export const ProductAPI = createApi({
  baseQuery: baseQuery,
  reducerPath: 'Product',
  endpoints: builder => ({
    getProduct: builder.query({
      query: params => ({
        url: '/view-product-status',
        params,
      }),
    }),
    getDetailProduct: builder.query({
      query: params => ({
        url: `slug-product/${params?.slug}`,
      }),
    }),
    getCategory: builder.query({
      query: params => ({
        url: '/all-category',
        params,
      }),
    }),
    getDetailCategory: builder.query({
      query: params => ({
        url: `slug-category/${params?.slug}`,
      }),
    }),
  }),
});

export const {
  useGetProductQuery,
  useLazyGetProductQuery,
  useGetCategoryQuery,
  useLazyGetCategoryQuery,
  useGetDetailCategoryQuery,
  useLazyGetDetailCategoryQuery,
  useGetDetailProductQuery,
  useLazyGetDetailProductQuery,
} = ProductAPI;
