import { useEffect, useState } from 'react';

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

      zoom: 11,
      mapId: '404836e1d93e11d',
    });

    setTravelMap(instance);

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return <></>;
};

export default TravelMap;
