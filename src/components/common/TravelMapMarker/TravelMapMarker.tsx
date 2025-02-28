import { useEffect } from 'react';
import { MarkerWrapper, Circle } from './TravelMapMarker.style';
import { createRoot } from 'react-dom/client';
import { Position } from '../../../types';

const TravelMapMarker = ({
  number,
  travelMap,
  position,
  place,
}: {
  number: number;
  travelMap: google.maps.Map | null;
  position: Position;
  place: string;
}) => {
  const handleMapSearch = (place: string) => {
    if (!place) return;
    const query = encodeURIComponent(place);
    window.open(`https://www.google.com/maps/search/?q=${query}`, '_blank');
  };

  useEffect(() => {
    if (!travelMap) return;
    const markerContainer = document.createElement('div');
    const markerInstance = new google.maps.marker.AdvancedMarkerElement({
      position,
      map: travelMap,
      title: place || '마커',
      content: markerContainer,
    });

    createRoot(markerContainer).render(<Circle>{number}</Circle>);

    markerInstance.addListener('click', () => {
      handleMapSearch(place);
    });

    return () => {
      markerInstance.map = null;
    };
  }, []);

  return <MarkerWrapper />;
};

export default TravelMapMarker;
