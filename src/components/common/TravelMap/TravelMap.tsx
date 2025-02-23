import { useEffect, useRef, useState } from 'react';
import { TravelMapWrapper } from './TravelMap.style';

const TravelMap = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [travelMap, setTravelMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current) {
      const initialMap = new window.google.maps.Map(ref.current, {
        center: {
          lat: 37.5,
          lng: 127.0,
        },
        zoom: 16,
      });
      setTravelMap(initialMap);
    }
  }, []);

  return (
    <TravelMapWrapper
      ref={ref}
      id='map'
      style={{ minHeight: '100vh' }}
    ></TravelMapWrapper>
  );
};

export default TravelMap;
