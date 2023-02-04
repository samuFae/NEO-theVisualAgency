import { RawAsteroids } from "./apiTypes";
import { baseApi } from "./base.endpoint";

interface Asteroid {
  id: string;
  name: string;
  isDangerous: boolean;
  diameter: {
    min: number;
    max: number;
  },
  lastApproach: Date;
  distance: string;
  speed: string;
}

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getNasa: build.query<Asteroid[], string>({
      query: (todayDate: string) => `?start_date=${todayDate}&end_date=${todayDate}&api_key=${process.env.REACT_APP_API_KEY}`,
      providesTags: ["Asteroids"],
      transformResponse: (response: RawAsteroids): Asteroid[] => {
        return response.near_earth_objects["2023-02-01"].map((obj) => {
          return {
            id: obj.id,
            name: obj.name,
            isDangerous: obj.is_potentially_hazardous_asteroid,
            diameter: {
              max: obj.estimated_diameter.meters.estimated_diameter_max,
              min: obj.estimated_diameter.meters.estimated_diameter_min,
            },
            lastApproach: new Date(obj.close_approach_data[0].epoch_date_close_approach),
            distance: obj.close_approach_data[0].miss_distance.kilometers,
            speed: obj.close_approach_data[0].relative_velocity.kilometers_per_hour
          }
        })
      },
    })
  }),
  overrideExisting: false
});

export const { useGetNasaQuery } = extendedApi;
