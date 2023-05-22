import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://641201246e3ca3175304119e.mockapi.io/api/auth',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchAll: builder.query({
      query: () => ({ url: '/contacts' }),
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: ({ name, number }) => ({
        url: '/contacts',
        method: 'POST',
        body: { name, number },
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: ({ id }) => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useFetchAllQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
