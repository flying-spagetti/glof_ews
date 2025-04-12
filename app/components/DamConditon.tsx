"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Tehri', total: 260, current: 180, inflow: 6.2, outflow: 3.4 },
  { name: 'Sardar Sarovar', total: 946, current: 800, inflow: 10.5, outflow: 7.8 },
  { name: 'Bhakra', total: 931, current: 750, inflow: 12.0, outflow: 9.2 },
  { name: 'Indira Sagar', total: 975, current: 860, inflow: 11.0, outflow: 6.0 },
  { name: 'Hirakud', total: 813, current: 600, inflow: 7.8, outflow: 5.1 },
  { name: 'Nagarjuna Sagar', total: 408, current: 320, inflow: 5.2, outflow: 4.0 },
  { name: 'Idukki', total: 199, current: 150, inflow: 3.4, outflow: 2.8 },
  { name: 'Tungabhadra', total: 101, current: 75, inflow: 2.3, outflow: 1.7 },
  { name: 'Mettur', total: 93.5, current: 70, inflow: 1.9, outflow: 1.4 },
  { name: 'KRS', total: 49.5, current: 40, inflow: 1.6, outflow: 1.1 },
];

export default function DamStorageChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full">
      <h2 className="text-2xl font-semibold text-center mb-6">Dam Storage Dashboard</h2>
      <ResponsiveContainer width="100%" height={450}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#8884d8" name="Total Capacity" />
          <Bar dataKey="current" fill="#82ca9d" name="Current Storage" />
          <Bar dataKey="inflow" fill="#3b82f6" name="Inflow" />
          <Bar dataKey="outflow" fill="#ef4444" name="Outflow" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
