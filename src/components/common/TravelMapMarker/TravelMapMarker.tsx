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

    const contentString = `
    <div id="dialog" style="font-family: Arial, sans-serif; padding: 10px; width: 400px;">
      <h1 id="firstHeading" style="font-size: 18px; color: ${colors.BLACK}; margin-bottom: 10px;">${place}</h1>
      <div id="bodyContent" style="font-size: 14px; line-height: 1.5;">
        <p style = "color: ${colors.BLACK}">
          대한민국 어딘가
        </p>
        <p style="margin-top: 10px;">
          <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"
            target="_blank"
            style="color: ${colors.PRIMARY}; text-decoration: none; font-weight: bold;">
            Google 지도로 확인하기
          </a>
        </p>
      </div>
    </div>
    `;

    // const contentString =
    //   '<div id="content">' +
    //   '<div id="siteNotice">' +
    //   '</div>' +
    //   '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    //   '<div id="bodyContent">' +
    //   '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    //   'sandstone rock formation in the southern part of the ' +
    //   'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
    //   'south west of the nearest large town, Alice Springs; 450&#160;km ' +
    //   '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
    //   'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
    //   'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
    //   'Aboriginal people of the area. It has many springs, waterholes, ' +
    //   'rock caves and ancient paintings. Uluru is listed as a World ' +
    //   'Heritage Site.</p>' +
    //   '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    //   'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
    //   '(last visited June 22, 2009).</p>' +
    //   '</div>' +
    //   '</div>';

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
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
