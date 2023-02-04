import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// initialize an empty api service that we'll inject endpoints into later as needed
export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.nasa.gov/neo/rest/v1/feed" }),
  endpoints: () => ({}),
  tagTypes: ["Asteroids"]
});