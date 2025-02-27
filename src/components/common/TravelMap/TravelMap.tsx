import { useEffect, useRef, useState } from 'react';
import TravelMapMarker from '../TravelMapMarker/TravelMapMarker';
import { MapWrapper, MapContainer } from './TravelMap.style';
import { Position } from '../../../types';

interface TravelMapProps {
  courses: { place: string; position: Position }[];
}

const TravelMap = ({ courses }: TravelMapProps) => {
  const [travelMap, setTravelMap] = useState<google.maps.Map>();
  const [markers, setMarkers] = useState<{ position: Position; place: string }[]>(courses);

  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const instance = new window.google.maps.Map(mapRef.current, {
      center: {
        lat: 33.4996,
        lng: 126.5312,
      },
      zoom: 10,
      mapId: '54070c16532231ab',
      disableDefaultUI: true,
      clickableIcons: false,
      minZoom: 10,
      maxZoom: 18,
    });

    setTravelMap(instance);
  }, [markers]);

  return (
    <MapWrapper>
      <MapContainer ref={mapRef} />
      {travelMap &&
        markers.map((marker, index) => (
          <TravelMapMarker
            key={index}
            number={index + 1}
            place={marker.place}
            travelMap={travelMap}
            position={marker.position}
          />
        ))}
    </MapWrapper>
  );
};

export default TravelMap;
