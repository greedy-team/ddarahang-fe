import { useEffect, useState } from 'react';
import { MarkerWrapper, Circle } from './TravelMapMarker.style';
import { createRoot } from 'react-dom/client';
import { Position } from '../../../types';
import { useSelectedPanel } from '../../../hooks/select/useSelectedPanel';

const TravelMapMarker = ({
  orderInday,
  travelMap,
  position,
  place,
}: {
  orderInday: number;
  travelMap: google.maps.Map | null;
  position: Position;
  place: string;
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const { selectedPanel } = useSelectedPanel();

  useEffect(() => {
    if (String(selectedPanel) === place) {
      setIsSelected(!isSelected);
    } else {
      setIsSelected(false);
    }
  }, [selectedPanel]);

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

    createRoot(markerContainer).render(<Circle isSelected={isSelected}>{orderInday}</Circle>);

    markerInstance.addListener('click', () => {
      handleMapSearch(place);
    });

    return () => {
      markerInstance.map = null;
    };
  }, [isSelected]);

  return <MarkerWrapper />;
};

export default TravelMapMarker;
