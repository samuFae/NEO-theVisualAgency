import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// initialize an empty api service that we'll inject endpoints into later as needed
export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: () => ({}),
  tagTypes: ["User", "KPI", "Templates", "Activity"],
  reducerPath: "campaignApi"
});

export const checkIfMock = (strings, ...values) => {
  if (process.env.REACT_APP_ENABLE_MOCK === "true") {
    const devUrl = "/" + (strings[strings.length - 1].split("/")[1] ?? strings[strings.length - 1])
    return devUrl
  } else {
    const oldUrl = strings.map((string, index) => string + (values[index] ?? "")).join("");
    return oldUrl
  }
}