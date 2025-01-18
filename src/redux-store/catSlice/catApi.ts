import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BreedI, CatI } from '../../types/CatInterface';

export const catApi = createApi({
   reducerPath: 'catApi',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://api.thecatapi.com/v1',
      headers: {
         'x-api-key': 'live_3BPseG0Y41ibptb5SSXJdQz2MfllToWzPalX3pGozB2ga8c8ZaPKnMpX15sLZKBz',
      },
   }),
   endpoints: (builder) => ({
      getCatByName: builder.query<CatI, string>({
         query: (name) =>
            `/images/search?size=small&mime_types=jpg&format=json&has_breeds=Aegean&order=RANDOM&page=0&limit=10`,
      }),
      getCatForBreed: builder.query<BreedI, string>({
         query: (name) => `/breeds/search?q=${name}`,
      }),
   }),
});

export const { useGetCatByNameQuery, useGetCatForBreedQuery } = catApi;
