import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';
import { CircleMarker, MapContainer, TileLayer } from 'react-leaflet';
import { Room } from '../../../redux/store/room';

function RoomMap({ room }: { room: Room }) {
  const mapRef = useRef(null);
  const latitude = room.location.lat;
  const longitude = room.location.lng;

  return (
    <div className="mt-5">
      <h4 className="mb-3 font-vazirBold text-lg">نقشه</h4>
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
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
