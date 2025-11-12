import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function RevenueTrendChart() {
  const [labels, setLabels] = useState<string[]>([]);
  const [dataPoints, setDataPoints] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const res = await fetch('http://localhost:3000/analytics/forecast?hotelId=1&date=2025-11-12');
        const json = await res.json();
        const forecast = json.forecast;

        setLabels(forecast.map((entry: any) => entry.date));
        setDataPoints(forecast.map((entry: any) => entry.revenue));
      } catch (err) {
        console.error('Failed to fetch forecast data', err);
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, []);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Revenue ($)',
        data: dataPoints,
        borderColor: '#3b82f6',
        backgroundColor: '#3b82f6',
        tension: 0.3,
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { mode: 'index', intersect: false },
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        beginAtZero: true,
        ticks: { callback: (val: number) => `$${val}` },
        grid: { color: '#e5e7eb' },
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">7-Day Revenue Forecast</h2>
      {loading ? (
        <p className="text-gray-500">Loading chart...</p>
      ) : (
        <Line data={chartData} options={chartOptions} />
      )}
    </div>
  );
}