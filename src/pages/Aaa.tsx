import 'leaflet/dist/leaflet.css';
import {
  Circle,
  FeatureGroup,
  LayersControl,
  MapContainer,
  TileLayer,
} from 'react-leaflet';

export default function Aaa() {
  const center: [number, number] = [51.51, -0.09];

  const typologies = ['office', 'sports', 'another-typology'];
  const publicFacilities = [
    {
      _id: '123',
      name: 'town hall',
      typology: 'office',
      coordinates: [51.49, -0.48],
    },
    {
      _id: '234',
      name: 'town hall 2',
      typology: 'sports',
      coordinates: [51.49, -0.38],
    },
    {
      _id: '456789',
      name: 'town hall',
      typology: 'office',
      coordinates: [51.49, -0.28],
    },
    {
      _id: '345',
      name: 'town hall',
      typology: 'sports',
      coordinates: [51.49, -0.18],
    },
    {
      _id: '3453333',
      name: 'town hall3',
      typology: 'office',
      coordinates: [51.49, -0.98],
    },
    {
      _id: '0987',
      name: 'another name',
      typology: 'another-typology',
      coordinates: [51.89, -0.18],
    },
    {
      _id: '096547',
      name: 'another name2',
      typology: 'another-typology',
      coordinates: [51.89, -0.38],
    },
  ];

  const uniquePublicFacilities = [
    ...new Map(
      publicFacilities.map((item) => [
        item.typology,
        {
          ...item,
          coordinates: publicFacilities
            .filter(({ typology }) => typology === item.typology)
            .map(({ coordinates }) => coordinates),
        },
      ]),
    ).values(),
  ];

  return (
    <MapContainer center={center} zoom={8} style={{ height: '100vh' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LayersControl position="topright">
        {typologies.map((typology, index) => (
          <LayersControl.Overlay
            key={`typology-${index}`}
            checked
            name={typology}
          >
            <FeatureGroup>
              {uniquePublicFacilities
                .filter(
                  (uniquePublicFacility) =>
                    uniquePublicFacility.typology === typology,
                )
                .map((uniquePublicFacility) => {
                  return uniquePublicFacility.coordinates.map(
                    ([lat, lng], latlngIndex) => {
                      return (
                        <Circle
                          key={latlngIndex}
                          center={[lat, lng]}
                          pathOptions={{ color: 'red', fillColor: 'red' }}
                          radius={1500}
                        />
                      );
                    },
                  );
                })}
            </FeatureGroup>
          </LayersControl.Overlay>
        ))}
      </LayersControl>
    </MapContainer>
  );
}
