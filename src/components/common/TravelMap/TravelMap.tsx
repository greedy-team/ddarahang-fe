import { useEffect, useRef, useState } from 'react';
import TravelMapMarker from '../TravelMapMarker/TravelMapMarker';
import { MapWrapper, MapContainer } from './TravelMap.style';
import { OneDayCourseType } from '../../../types';
import { useSelectOptionContext } from '../../../hooks/context/useSelectOptionContext';

interface TravelMapProps {
  oneDayCourses: OneDayCourseType[];
}

const TravelMap = ({ oneDayCourses }: TravelMapProps) => {
  const [travelMap, setTravelMap] = useState<google.maps.Map>();
  const [markers, setMarkers] = useState<OneDayCourseType[]>(oneDayCourses);
  const [selectedMarker, setSelectedMarker] = useState<string>();
  const mapRef = useRef<HTMLDivElement>(null);
  const { selectedOption } = useSelectOptionContext();

  const countryBounds: { [key: string]: google.maps.LatLngBoundsLiteral } = {
    대한민국: { north: 39.0, south: 33.0, west: 124.0, east: 132.0 },
    일본: { north: 45.5, south: 24.2, west: 122.9, east: 145.8 },
    말레이시아: { north: 7.5, south: 0.8, west: 99.6, east: 120.0 },
  };

  useEffect(() => {
    if (!mapRef.current) {
      alert('Map container is not available');
      return;
    }

    const instance = new window.google.maps.Map(mapRef.current, {
      center: {
        lat: markers[Math.floor(markers.length / 2)].position?.lat,
        lng: markers[Math.floor(markers.length / 2)].position?.lng,
      },
      zoom: 15,
      restriction: {
        latLngBounds: countryBounds[selectedOption.countryName],
        strictBounds: true,
      },
      mapId: '54070c16532231ab',
      disableDefaultUI: true,
      clickableIcons: false,
      minZoom: 13,
      maxZoom: 17,
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
            placeName={marker.placeName}
            travelMap={travelMap}
            position={marker.position}
            address={marker.address}
            selectedMarker={selectedMarker}
            setSelectedMarker={setSelectedMarker}
          />
        ))}
    </MapWrapper>
  );
};

export default TravelMap;
