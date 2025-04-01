import { useEffect, useState } from 'react';
import { MarkerWrapper, Circle, PlaceCard, StyledMarker } from './TravelMapMarker.style';
import { createRoot } from 'react-dom/client';
import { Position } from '../../../types';
import { useSelectedPanel } from '../../../hooks/context/useSelectedPanelContext';
import TravelMapInfoWindow from '../TravelMapInfoWindow/TravelMapInfoWindow';

const TravelMapMarker = ({
  orderInday,
  travelMap,
  position,
  place,
  address,
  selectedMarker,
  setSelectedMarker,
}: {
  orderInday: number;
  travelMap: google.maps.Map | null;
  position: Position;
  place: string;
  address: string;
  selectedMarker: string | undefined;
  setSelectedMarker: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const { selectedPanel, setSelectedPanel } = useSelectedPanel();

  useEffect(() => {
    if (String(selectedPanel) === place) {
      setIsSelected(!isSelected);
      setSelectedMarker('');
    } else {
      setIsSelected(false);
      setSelectedMarker('');
    }
  }, [selectedPanel]);

  useEffect(() => {
    if (!travelMap) return;
    const markerContainer = document.createElement('div');
    const markerInstance = new google.maps.marker.AdvancedMarkerElement({
      position,
      map: travelMap,
      title: place || '마커',
      content: markerContainer,
    });

    const infowindow = new google.maps.InfoWindow({
      content: (() => {
        const container = document.createElement('div');
        createRoot(container).render(<TravelMapInfoWindow address={address} />);
        return container;
      })(),
      headerContent: place,
    });

    if (selectedMarker === place || isSelected) {
      infowindow.open({
        anchor: markerInstance,
      });
    } else {
      infowindow.close();
    }

    markerInstance.addListener('click', () => {
      setSelectedPanel(place);
      setSelectedMarker(place);
      infowindow.open({
        anchor: markerInstance,
      });
    });

    createRoot(markerContainer).render(
      <StyledMarker>
        <Circle isSelected={isSelected}>{orderInday}</Circle>
        <PlaceCard>{place}</PlaceCard>
      </StyledMarker>,
    );

    return () => {
      markerInstance.map = null;
    };
  }, [isSelected, selectedMarker]);

  return <MarkerWrapper />;
};

export default TravelMapMarker;
