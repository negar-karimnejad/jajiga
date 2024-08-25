import { Icon, Map } from 'leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/leaflet.css';
import { useRef, useState } from 'react';
import { CircleMarker, MapContainer, Marker, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';
import useRooms from '../../../hooks/useRooms';
import { Room } from '../../../redux/store/room';
import RoomInfosLink from './RoomInfosLink';

function RoomMap({
  geo,
  fullsize,
  blueCircleMarker,
}: {
  fullsize?: boolean;
  geo: [number, number][];
  blueCircleMarker: boolean;
}) {
  const mapRef = useRef<Map>(null);
  const { rooms } = useRooms();

  const [markedRoom, setMarkedRoom] = useState<Room | null>(null);

  if (!geo.length) return null;

  const handleMarkerClick = ({ lat, lng }: { lat: number; lng: number }) => {
    const room = rooms?.find(
      (room) => room.location.lat === lat && room.location.lng === lng,
    );
    if (room) setMarkedRoom(room);
  };

  return (
    <>
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
            <Marker
              eventHandlers={{
                click: () => handleMarkerClick({ lat, lng }),
              }}
              key={latlngIndex}
              position={[lat, lng]}
              icon={
                new Icon({
                  iconUrl: markerIconPng,
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                })
              }
            ></Marker>
          ))
        )}
      </MapContainer>
      {!blueCircleMarker && (
        <div
          className={`absolute left-2 right-2 z-40 flex justify-between rounded-xl border bg-white shadow-lg shadow-gray-400 transition-all dark:border-gray-900 dark:bg-gray-800 ${markedRoom ? 'visible bottom-10 max-md:bottom-10' : 'invisible -bottom-32 max-md:-bottom-32'} ${fullsize ? 'visible mx-auto w-96' : 'max-md:invisible'}`}
        >
          <Link to={`/room/${markedRoom?.code}`}>
            <img
              src={markedRoom?.images[0]}
              className="h-[6.2rem] w-24 rounded-xl object-cover"
              alt={markedRoom?.title}
            />
          </Link>
          <div className="pr-1">
            {markedRoom && <RoomInfosLink titleWidth="96%" room={markedRoom} />}
          </div>
          <button
            onClick={() => setMarkedRoom(null)}
            className="ml-0.5 mt-1 flex h-5 w-5 items-center justify-center rounded-sm pt-1.5 font-vazirMedium text-2xl hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}

export default RoomMap;
