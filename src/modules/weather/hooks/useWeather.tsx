import { useQuery } from "@tanstack/react-query";
import { getWeatherServices } from "../services/weatherServises";

export const useWeather = (location: string) => {
  return useQuery({
    queryKey: ["weather", location],
    queryFn: () => getWeatherServices(location),
    enabled: !!location,
    staleTime: 1000 * 60 * 5,
  });
};
