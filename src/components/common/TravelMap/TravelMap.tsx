import { useEffect, useRef, useState } from 'react';
import TravelMapMarker from '../TravelMapMarker/TravelMapMarker';
import { MapWrapper, MapContainer } from './TravelMap.style';
import { OneDayCourseType } from '../../../types';

interface TravelMapProps {
  oneDayCourses: OneDayCourseType[];
}

const TravelMap = ({ oneDayCourses }: TravelMapProps) => {
  const [travelMap, setTravelMap] = useState<google.maps.Map>();
  const [markers, setMarkers] = useState<OneDayCourseType[]>(oneDayCourses);

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
    setMarkers(oneDayCourses);
  }, [oneDayCourses]);

  return (
    <MapWrapper>
      <MapContainer ref={mapRef} />
      {travelMap &&
        markers.map((marker, index) => (
          <TravelMapMarker
            key={index}
            orderInday={marker.orderInday}
            place={marker.placeName}
            travelMap={travelMap}
            position={marker.position}
          />
        ))}
    </MapWrapper>
  );
};

export default TravelMap;
