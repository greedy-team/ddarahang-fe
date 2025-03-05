import { useEffect, useState } from 'react';
import { MarkerWrapper, Circle } from './TravelMapMarker.style';
import { createRoot } from 'react-dom/client';
import { Position } from '../../../types';
import { useSelectedPanel } from '../../../hooks/context/useSelectedPanelContext';
import { colors } from '../../../styles/Theme';


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

    const contentString = `
    <div 
      id="content" 
      style="width: 200px; 
      font-weight: 500;
      word-break: keep-all;
    ">
      <div 
        id="bodyContent" 
        style="font-size: 14px; 
        line-height: 1.5; 
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${colors.BLACK}
      ">
        <p style = "color: ${colors.BLACK}">
          ${address}
        </p>
        <p style="margin-top: 1px; border: none">
          <a href="https://www.google.com/maps/search/?q=${place}+${address}"
            target="_blank"
            style="color: ${colors.PRIMARY}; text-decoration: none; font-weight: bold;">
            Google 지도로 확인하기
          </a>
        </p>
      </div>
    </div>
    `;

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
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

    createRoot(markerContainer).render(<Circle isSelected={isSelected}>{orderInday}</Circle>);

    return () => {
      markerInstance.map = null;
    };
  }, [isSelected, selectedMarker]);

  return <MarkerWrapper />;
};

export default TravelMapMarker;
