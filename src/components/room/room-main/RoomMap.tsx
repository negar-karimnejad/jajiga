import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';
import { CircleMarker, MapContainer, TileLayer } from 'react-leaflet';

function RoomMap() {
  const mapRef = useRef(null);
  const latitude = 32.29442410594691;
  const longitude = 48.43196151765597;

  return (
    <div className="mt-5">
      <h4 className="mb-3 font-vazirBold text-lg">نقشه</h4>
      <MapContainer
        center={[latitude, longitude]}
        zoom={15}
        ref={mapRef}
        scrollWheelZoom={false}
        className="room-map z-0 h-64 w-full rounded-xl border border-gray-200"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CircleMarker
          center={[latitude, longitude]}
          pathOptions={{
            fillColor: '#2e1fff',
            fillOpacity: 0.4,
          }}
          radius={50}
        ></CircleMarker>
      </MapContainer>
      <div className="my-5 h-[1px] w-full bg-gray-200"></div>
    </div>
  );
}

export default RoomMap;
