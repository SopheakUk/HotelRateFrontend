import { useEffect, useState } from 'react';

export default function TotalRevenueToday() {
  const [revenue, setRevenue] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRevenue = async () => {
      try {
        const response = await fetch('http://localhost:3000/analytics/revenue?hotelId=2&date=2025-11-12');
        const data = await response.json();
        setRevenue(data.revenue);
      } catch (err) {
        setError('Failed to fetch revenue');
      } finally {
        setLoading(false);
      }
    };

    fetchRevenue();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Today's Revenue</h2>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <p className="text-3xl font-bold text-green-600">${revenue?.toLocaleString()}</p>
      )}
    </div>
  );
}