import { useEffect, useState } from 'react';

export default function Occupancy() {
  const [revenue, setRevenue] = useState<number | null>(null);
  const [revpar, setRevpar] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchKpi = async () => {
      try {
        const response = await fetch('http://localhost:3000/analytics/kpis?hotelId=1&date=2025-11-12');
        const data = await response.json();
        setRevenue(data.revenue);
        setRevpar(data.revpar);
      } catch (err) {
        setError('Failed to fetch revenue');
      } finally {
        setLoading(false);
      }
    };

    fetchKpi();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Occupancy</h2>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <p className="text-3xl font-bold text-green-600">${revenue?.toLocaleString()}</p>
          <p className="text-3xl font-bold text-green-600">{revpar}</p>
        </>
      )}
    </div>
  );
}