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
    <div id="content" style="font-family: Arial, sans-serif; width: 200px;">
      <div id="bodyContent" style="font-size: 14px; line-height: 1.5;">
        <p style = "color: ${colors.BLACK}">
          대한민국 어딘가
        </p>
        <p style="margin-top: 1px;">
          <a href="https://www.google.com/maps/search/?q=${place}"
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
      // handleMapSearch(place);
    });

    return () => {
      markerInstance.map = null;
    };
  }, [isSelected]);

  return <MarkerWrapper />;
};

export default TravelMapMarker;
