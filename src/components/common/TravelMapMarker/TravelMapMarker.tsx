import { useEffect, useState } from 'react';
import { MarkerWrapper, Circle, PlaceCard, StyledMarker } from './TravelMapMarker.style';
import { createRoot } from 'react-dom/client';
import { Position } from '../../../types';
import { useSelectedPanel } from '../../../hooks/context/useSelectedPanelContext';
import TravelMapInfoWindow from '../TravelMapInfoWindow/TravelMapInfoWindow';

interface TravelMapMarkerProps {
  orderInday: number;
  travelMap: google.maps.Map | null;
  position: Position;
  placeName: string;
  address: string;
  selectedMarker: string | undefined;
  setSelectedMarker: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const TravelMapMarker = ({
  orderInday,
  travelMap,
  position,
  placeName,
  address,
  selectedMarker,
  setSelectedMarker,
}: TravelMapMarkerProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const { selectedPanel, setSelectedPanel } = useSelectedPanel();

  useEffect(() => {
    if (String(selectedPanel) === placeName) {
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
      title: placeName || '마커',
      content: markerContainer,
    });

    const infowindow = new google.maps.InfoWindow({
      content: (() => {
        const container = document.createElement('div');
        createRoot(container).render(
          <TravelMapInfoWindow
            address={address}
            placeName={placeName}
          />,
        );
        return container;
      })(),
      headerContent: placeName,
    });

    if (selectedMarker === placeName || isSelected) {
      infowindow.open({
        anchor: markerInstance,
      });
    } else {
      infowindow.close();
    }

    markerInstance.addListener('click', () => {
      if (selectedPanel === placeName) {
        setSelectedPanel('');
        setSelectedMarker('');
        infowindow.close();
      } else {
        setSelectedPanel(placeName);
        setSelectedMarker(placeName);
        infowindow.open({
          anchor: markerInstance,
        });
      }
    });

    createRoot(markerContainer).render(
      <StyledMarker>
        <Circle isSelected={isSelected}>{orderInday}</Circle>
        <PlaceCard>{placeName}</PlaceCard>
      </StyledMarker>,
    );

    return () => {
      markerInstance.map = null;
    };
  }, [isSelected, selectedMarker]);

  return <MarkerWrapper />;
};

export default TravelMapMarker;
