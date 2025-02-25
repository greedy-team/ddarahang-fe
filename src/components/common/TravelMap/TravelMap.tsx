import { useEffect, useRef, useState } from 'react';
import TravelMapMarker from '../TravelMapMarker/TravelMapMarker';
import { MapWrapper, MapContainer } from './TravelMap.style';

const TravelMap = () => {
  const [travelMap, setTravelMap] = useState<google.maps.Map>();
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
  }, []);

  return (
    <MapWrapper>
      <MapContainer ref={mapRef} />
      {travelMap && (
        <TravelMapMarker
          number={1}
          travelMap={travelMap}
          position={{ lat: 33.354, lng: 126.5312 }}
        />
      )}
    </MapWrapper>
  );
};

export default TravelMap;
