import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CatI } from '../../types/CatInterface';

export const catApi = createApi({
   reducerPath: 'catApi',
   baseQuery: fetchBaseQuery({
      baseUrl:
         'https://api.thecatapi.com/v1/images/search?size=small&mime_types=jpg&format=json&has_breeds=Aegean&order=RANDOM&page=0&limit=10',
      headers: {
         'x-api-key': 'live_3BPseG0Y41ibptb5SSXJdQz2MfllToWzPalX3pGozB2ga8c8ZaPKnMpX15sLZKBz',
      },
   }),
   endpoints: (builder) => ({
      getCatByName: builder.query<CatI, string>({
         query: (name) => ``,
      }),
   }),
});

export const { useGetCatByNameQuery } = catApi;
