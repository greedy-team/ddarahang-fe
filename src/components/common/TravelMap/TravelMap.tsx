import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import TravelMapMarker from '../TravelMapMarker/TravelMapMarker';

const TravelMap = () => {
  const [travelMap, setTravelMap] = useState<google.maps.Map>();

  useEffect(() => {
    const container = document.createElement('div');

    container.id = 'map';
    container.style.position = 'absolute';
    container.style.top = '0';
    container.style.right = '0';
    container.style.height = '100vh';
    container.style.width = '50vw';

    document.body.appendChild(container);

    const instance = new window.google.maps.Map(container, {
      center: {
        lat: 33.4996,
        lng: 126.5312,
      },
      zoom: 10,
      mapId: '404836e1d93e11d',

      disableDefaultUI: true,
      clickableIcons: false,
      minZoom: 10,
      maxZoom: 18,
      gestureHandling: 'greedy',
      restriction: {
        latLngBounds: {
          north: 39,
          south: 32,
          east: 132,
          west: 124,
        },
        strictBounds: true,
      },
    });

    setTravelMap(instance);

    return () => {
      document.body.removeChild(container);
    };
  }, []);

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
    createRoot(markerContainer).render(<TravelMapMarker number={1} />);
    markerInstance.addListener('click', () => {
      alert('마커 클릭');
    });

    return () => {
      markerInstance.map = null;
    };
  }, [travelMap]);

  return <></>;
};

export default TravelMap;
