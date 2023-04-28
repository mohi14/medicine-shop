import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// export const apiSlice = createSlice({
//   reducerPath: "api",
//   basQuery: fetchBaseQuery({
//     baseUrl: "jljklj",
//   }),
//   endpoints: (builder) => ({}),
// });

export const apiSlice = createApi({
  reducerPath: "api",
  basQuery: fetchBaseQuery({
    baseUrl: "jljklj",
  }),
  endpoints: (builder) => ({}),
});
