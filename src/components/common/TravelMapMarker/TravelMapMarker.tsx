import { useEffect } from 'react';
import { MarkerWrapper, Circle } from './TravelMapMarker.style';
import { createRoot } from 'react-dom/client';

const TravelMapMarker = ({
  number,
  travelMap,
  position,
}: {
  number: number;
  travelMap: google.maps.Map | null;
  position: { lat: number; lng: number };
}) => {
  useEffect(() => {
    const markerContainer = document.createElement('div');
    const markerInstance = new google.maps.marker.AdvancedMarkerElement({
      position: {
        lat: 33.354,
        lng: 126.5312,
      },
      map: travelMap,
      title: '마커',
      content: markerContainer,
    });

    createRoot(markerContainer).render(<Circle>{number}</Circle>);
    markerInstance.addListener('click', () => {
      alert('마커 클릭');
    });

    return () => {
      markerInstance.map = null;
    };
  }, [travelMap]);

  return <MarkerWrapper />;
};

export default TravelMapMarker;
