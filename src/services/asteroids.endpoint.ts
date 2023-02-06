import { RawAsteroids } from "./apiTypes";
import { baseApi } from "./base.endpoint";

export interface AsteroidData {
  id: string;
  name: string;
  isDangerous: boolean;
  diameterM: {
    min: number;
    max: number;
  },
  lastApproach: string;
  distanceKm: number;
  speedKmH: number;
}

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getNasa: build.query<AsteroidData[], string>({
      query: (todayDate: string) => `?start_date=${todayDate}&end_date=${todayDate}&api_key=${process.env.REACT_APP_API_KEY}`,
      providesTags: ["Asteroids"],
      transformResponse: (response: RawAsteroids, meta, arg): AsteroidData[] => {
        return response.near_earth_objects[arg].map((obj) => {
          return {
            id: obj.id,
            name: obj.name,
            isDangerous: obj.is_potentially_hazardous_asteroid,
            diameterM: {
              max: Math.round(+obj.estimated_diameter.meters.estimated_diameter_max),
              min: Math.round(+obj.estimated_diameter.meters.estimated_diameter_min),
            },
            lastApproach: obj.close_approach_data[0].epoch_date_close_approach,
            distanceKm: Math.round(+obj.close_approach_data[0].miss_distance.kilometers),
            speedKmH: Math.round(+obj.close_approach_data[0].relative_velocity.kilometers_per_hour)
          }
        })
      },
    })
  }),
  overrideExisting: false
});

export const { useGetNasaQuery } = extendedApi;
