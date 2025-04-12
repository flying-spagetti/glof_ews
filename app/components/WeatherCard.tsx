'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaWind, FaTint, FaCloudRain, FaSun, FaMoon, FaCompass } from 'react-icons/fa';

type Props = {
  city: string;
  lat: number;
  lon: number;
};

type CurrentWeather = {
  temperature_2m: number;
  is_day: number;
  relative_humidity_2m: number;
  wind_speed_10m: number;
  wind_direction_10m: number;
  rain: number;
};

const WeatherCard: React.FC<Props> = ({ city, lat, lon }) => {
  const [weather, setWeather] = useState<CurrentWeather | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,rain,precipitation_probability,weather_code,cloud_cover_mid,cloud_cover_low,cloud_cover_high&current=temperature_2m,is_day,relative_humidity_2m,wind_speed_10m,wind_direction_10m,rain,precipitation,weather_code&timezone=auto&past_days=1`
        );
        setWeather(res.data.current);
      } catch (err) {
        setError(true);
        console.error('Failed to fetch weather:', err);
      }
    };

    fetchWeather();
  }, [lat, lon]);

  if (error) return <div className="text-center text-red-600">⚠️ Failed to load weather data</div>;
  if (!weather) return <div className="text-center text-gray-600">Loading weather...</div>;

  return (
    <div className="bg-gradient-to-br from-sky-100 to-sky-300 rounded-2xl shadow-lg p-6 w-full max-w-sm mx-auto text-gray-800">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-sky-800">{city}</h2>
        <div className="text-3xl text-yellow-500">
          {weather.is_day ? <FaSun /> : <FaMoon />}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-5xl font-extrabold text-sky-900">{weather.temperature_2m}°C</p>
          <p className="text-sm text-gray-700">{weather.is_day ? 'Daytime' : 'Nighttime'}</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center gap-2">
          <FaTint className="text-blue-600" />
          <span><strong>Humidity:</strong> {weather.relative_humidity_2m}%</span>
        </div>
        <div className="flex items-center gap-2">
          <FaWind className="text-gray-700" />
          <span><strong>Wind:</strong> {weather.wind_speed_10m} km/h</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCompass className="text-orange-700" title={`Direction: ${weather.wind_direction_10m}°`} />
          <span><strong>Dir:</strong> {weather.wind_direction_10m}°</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCloudRain className="text-indigo-700" />
          <span><strong>Rain:</strong> {weather.rain ?? 0} mm</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
