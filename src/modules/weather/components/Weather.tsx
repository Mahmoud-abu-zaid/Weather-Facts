"use client";
import Search from "./Search";
import Image from "next/image";
import Loading from "@/components/loading";
import { FaCalendarDay } from "react-icons/fa6";
import { ForecastDay } from "../types/weatherType";
import { wheaterImage } from "../utils/weatherImage";
import { useWeatherFacts } from "../hooks/useWeather";
import { WiBarometer, WiCelsius, WiCloud, WiDaySunny, WiHumidity, WiRaindrops, WiStrongWind, WiThermometer } from "react-icons/wi";

export default function Weather() {
  const { data, isLoading, error, setCity } = useWeatherFacts({ city: "Cairo" });
  const forecastDays: ForecastDay[] = data?.forecast?.forecastday || [];
  const nextDay = forecastDays.slice(1);
  return (
    <>
      <div>
        <Search onSearch={setCity} />
      </div>

      {isLoading && (
        <div className="flex justify-center items-center">
          <Loading />
        </div>
      )}
      {error && (
        <div className="flex flex-col justify-center items-center h-[50vh] gap-3.5 text-white ">
          <h3 className="text-6xl">Oops</h3>
          <p className="text-white text-2xl">Data for that city is unavailable. Please try again.</p>
        </div>
      )}
      {data && !isLoading && !error && (
        <div className=" w-full h-full ">
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-3 py-4">
            <div className="text-white bg-[#1B262C]/70  p-4 rounded-xl h-full text-lg">
              <h2 className="text-2xl font-bold text-center"> {data.location.name}</h2>
              <div className="flex sm:flex-row flex-col justify-between gap-3 items-center ">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl py-2">Today</h3>
                  <p>
                    {new Date(data.location.localtime).toLocaleString("en-US", {
                      weekday: "long",
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </p>
                  <p>
                    <WiDaySunny className="inline mr-1 text-2xl" /> Temp: {data.current.temp_c}°C
                  </p>
                  <p>
                    <WiCloud className="inline mr-1 text-2xl" /> Condition: {data.current.condition.text}
                  </p>
                </div>
                <div>
                  <Image src={wheaterImage(data.current.condition.text)} alt={data.current.condition.text} width={140} height={140} priority />
                </div>
              </div>
            </div>
            <div className=" w-full h-full flex flex-col gap-2">
              <div className="p-3 bg-[#2d404b]/50 rounded-lg h-full text-white flex flex-col gap-2 ">
                <h3 className="text-2xl py-2">Days Forecast</h3>
                {nextDay.map((day) => (
                  <div key={day.date} className="flex flex-col gap-1">
                    <div className="flex justify-between items-center py-2">
                      <div className="flex flex-col gap-1">
                        <h4 className="font-bold">
                          <FaCalendarDay className="inline mr-1 text-xl" />
                          {day.date}
                        </h4>
                        <p>
                          <WiThermometer className="inline mr-1 text-2xl" /> High: {day.day.maxtemp_c}°C
                        </p>
                        <p>
                          <WiCelsius className="inline mr-1 text-2xl" /> Low: {day.day.mintemp_c}°C
                        </p>
                        <p>
                          <WiCloud className="inline mr-1 text-2xl" /> Condition: {day.day.condition.text}
                        </p>
                      </div>
                      <div>
                        <Image src={wheaterImage(day.day.condition.text)} alt={day.day.condition.text} width={120} height={120} priority />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-white bg-[#2b3d47]/80 p-4 rounded-xl text-lg flex flex-col gap-4">
            <h3 className="text-2xl py-2">Weather Details</h3>
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
            <p>
              <WiStrongWind className="inline mr-1 text-2xl" /> Heat Index / Wind Chill → ({data.current.heatindex_c} / {data.current.windchill_c})
            </p>
            <p>
              <WiDaySunny className="inline mr-1 text-2xl" /> Feels Like: {data.current.feelslike_c}
            </p>
            <p>
              <WiRaindrops className="inline mr-1 text-2xl" /> Precipitation: {data.current.precip_mm}
            </p>

            <p>
              <WiHumidity className="inline mr-1 text-2xl" /> Dew Point: {data.current.dewpoint_c}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
