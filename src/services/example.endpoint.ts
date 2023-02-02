import { baseApi } from "./base.endpoint";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<User[], void>({
      query: () => "/users",
      providesTags: ["User"]
    }),
    fetchUser: build.query<User, number | undefined>({
      query: (id) => `/users/${id}`,
      providesTags: (res) => (res ? [{ type: "User", id: res.id }] : [])
    })
  }),
  overrideExisting: false
});

export const { useGetUsersQuery, useFetchUserQuery } = extendedApi;
