import { useEffect, useRef, useState } from 'react';
import TravelMapMarker from '../TravelMapMarker/TravelMapMarker';
import { MapWrapper, MapContainer } from './TravelMap.style';
import { Position } from '../../../types';

interface TravelMapProps {
  courses: { place: string; position: Position }[];
  selectedPanel: string | null;
}

const TravelMap = ({ courses, selectedPanel }: TravelMapProps) => {
  const [travelMap, setTravelMap] = useState<google.maps.Map>();
  const [markers, setMarkers] = useState<{ position: Position; place: string }[]>(courses);

  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const instance = new window.google.maps.Map(mapRef.current, {
      center: {
        lat: markers[Math.floor(markers.length / 2)].position.lat,
        lng: markers[Math.floor(markers.length / 2)].position.lng,
      },
      zoom: 10,
      mapId: '54070c16532231ab',
      disableDefaultUI: true,
      clickableIcons: false,
      minZoom: 1,
      maxZoom: 30,
    });

    setTravelMap(instance);
  }, []);

  useEffect(() => {
    setMarkers(courses);
  }, [courses]);

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
