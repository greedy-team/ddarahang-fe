import { Panels, StyledWarningMessage } from './TabPanel.style';
import PlaceCardItem from '../../PlaceCard/PlaceCardItem';
import { FavoritePlaceType, OneDayCourseType } from '../../../../types';

interface TabPanelProps {
  oneDayCourse: OneDayCourseType[] | FavoritePlaceType[];
}

const TabPanel = ({ oneDayCourse }: TabPanelProps) => {
  if (oneDayCourse.length === 0) {
    return <StyledWarningMessage>장소 리스트가 존재하지 않습니다.</StyledWarningMessage>;
  }

  return (
    <Panels>
      {oneDayCourse.map((course) => {
        return (
          <PlaceCardItem
            key={course.orderInday}
            orderInList={course.orderInday}
            placeItem={course}
          />
        );
      })}
    </Panels>
  );
};

export default TabPanel;
