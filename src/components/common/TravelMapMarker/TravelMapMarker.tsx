import { useEffect, useState } from 'react';
import { MarkerWrapper, Circle } from './TravelMapMarker.style';
import { createRoot } from 'react-dom/client';
import { Position } from '../../../types';
import { useSelectedPanel } from '../../../hooks/select/useSelectedPanel';
import { colors } from '../../../styles/Theme';

const TravelMapMarker = ({
  orderInday,
  travelMap,
  position,
  place,
  address,
}: {
  orderInday: number;
  travelMap: google.maps.Map | null;
  position: Position;
  place: string;
  address: string;
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

    createRoot(markerContainer).render(<Circle isSelected={isSelected}>{orderInday}</Circle>);

    markerInstance.addListener('click', () => {
      infowindow.open({
        anchor: markerInstance,
      });
    });

    isSelected &&
      infowindow.open({
        anchor: markerInstance,
      });

    return () => {
      markerInstance.map = null;
    };
  }, [isSelected]);

  return <MarkerWrapper />;
};

export default TravelMapMarker;
