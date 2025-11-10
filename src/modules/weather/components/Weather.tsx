"use client";
import { useState } from "react";
import { useWeather } from "../hooks/useWeather";
import Search from "./Search";
import { WiBarometer, WiCloud, WiDaySunny, WiHumidity, WiRaindrops, WiStrongWind } from "react-icons/wi";

interface ForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      text: string;
    };
  };
}
export default function Weather({ city: defaultCity = "Cairo" }) {
  const [city, setCity] = useState(defaultCity);
  const { data, isLoading, error } = useWeather(city);

  const forecastDays: ForecastDay[] = data?.forecast?.forecastday || [];
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <Search onSearch={setCity} />
      </div>

      {isLoading && <p>Loading weather data...</p>}
      {error && <p>Error fetching weather data</p>}
      {data && !isLoading && !error && (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3  w-full">
          <div className=" w-full h-[200px]">
            <div className="text-white bg-[#1B262C]/70 mt-5 p-4 rounded-xl h-[270px] text-lg">
              <h2 className="text-2xl font-bold text-center">{data.location.name}</h2>
              <h3 className="text-2xl py-2">Today</h3>
              {forecastDays.map((day) => (
                <div key={day.date}>
                  <h4>{day.date}</h4>
                </div>
              ))}
              <p>
                <WiDaySunny className="inline mr-1 text-2xl" /> Temp: {data.current.temp_c}°C
              </p>
              <p>
                <WiCloud className="inline mr-1 text-2xl" /> Condition: {data.current.condition.text}
              </p>
            </div>
          </div>
          <div className="pt-5 w-full ">
            {forecastDays.map((day) => (
              <div key={day.date} className="p-2 bg-[#2d404b]/50 rounded-lg h-[270px]">
                <h4>{day.date}</h4>
                <p>High: {day.day.maxtemp_c}°C</p>
                <p>Low: {day.day.mintemp_c}°C</p>
                <p>Condition: {day.day.condition.text}</p>
              </div>
            ))}
          </div>
          <div>
            <p>
              <WiHumidity className="inline mr-1 text-2xl" /> Humidity: {data.current.humidity}%
            </p>
            <p>
              <WiStrongWind className="inline mr-1 text-2xl" /> Wind: {data.current.wind_kph} km/h ({data.current.wind_dir})
            </p>
            <p>
              <WiBarometer className="inline mr-1 text-2xl" /> Pressure: {data.current.pressure_mb} mb
            </p>
            <p>
              <WiDaySunny className="inline mr-1 text-2xl" /> UV Index: {data.current.uv}
            </p>
            <p>
              <WiRaindrops className="inline mr-1 text-2xl" /> Visibility: {data.current.vis_km} km
            </p>
          </div>
        </div>
      )}
    </>
  );
}
