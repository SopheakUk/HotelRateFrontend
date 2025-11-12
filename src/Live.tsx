import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';

export default function Live() {

    const [data, setData] = useState<number | null>(null);

 useEffect(() => {
    const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connected:', socket.id);
});

socket.on('hotel-update', (data) => {
  //console.log('Received update:', data);
  // Update UI or cache accordingly
  setData(data.data);
});

    return () => {
      socket.off('hotel-update');
      socket.disconnect();
    };
  }, []);

return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Live</h2>
      <p className="text-3xl font-bold text-green-600">{data}</p>
    </div>
  );

}