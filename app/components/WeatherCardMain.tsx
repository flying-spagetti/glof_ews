import Head from 'next/head';
import WeatherCard from './WeatherCard';

const cities = [
  { name: 'Rishikesh', lat: 30.0869, lon: 78.2676 },
  { name: 'Haridwar', lat: 29.9457, lon: 78.1642 },
  { name: 'Varanasi', lat: 25.3176, lon: 82.9739 },
  { name: 'Patna', lat: 25.5941, lon: 85.1376 },
  { name: 'Bhagalpur', lat: 25.25, lon: 87.0 },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather Dashboard</title>
      </Head>
      <main className="min-h-screen bg-orange-50 p-6">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-8">🌤 Weather Dashboard</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <WeatherCard key={city.name} city={city.name} lat={city.lat} lon={city.lon} />
          ))}
        </div>
      </main>
    </>
  );
}
