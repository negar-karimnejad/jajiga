import { Map } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';
import {
  CircleMarker,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
} from 'react-leaflet';
import { Link } from 'react-router-dom';
import useRooms from '../../../hooks/useRooms';

function RoomMap({
  geo,
  blueCircleMarker,
}: {
  geo: [number, number][];
  blueCircleMarker: boolean;
}) {
  const mapRef = useRef<Map>(null);
  const { rooms } = useRooms();

  if (!geo.length) return null;
  return (
    <MapContainer
      center={[geo[0][0], geo[0][1]]}
      zoom={7}
      ref={mapRef}
      scrollWheelZoom={blueCircleMarker ? false : true}
      className={`room-map z-0 h-full w-full rounded-xl border border-gray-200 ${blueCircleMarker ? '' : 'rooms-page'}`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {blueCircleMarker ? (
        <CircleMarker
          center={[geo[0][0], geo[0][1]]}
          pathOptions={{
            fillColor: '#2e1fff',
            fillOpacity: 0.4,
          }}
          radius={50}
        ></CircleMarker>
      ) : (
        geo.map(([lat, lng], latlngIndex) => (
          <Marker key={latlngIndex} position={[lat, lng]}>
            <Popup>
              <Link to="/room/5465"></Link>
            </Popup>
          </Marker>
        ))
      )}
    </MapContainer>
  );
}

export default RoomMap;
