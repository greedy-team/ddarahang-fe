import { Panels, TabErrorMessage } from './TabPanel.style';
import PlaceCardItem from '../../PlaceCard/PlaceCardItem';
import { OneDayCourseType } from '../../../../types';
import RectangleButton from '../../Button/RectangleButton/RectangleButton';
import { useNavigate } from 'react-router-dom';

interface TabPanelProps {
  isFavorite?: boolean;
  oneDayCourse: OneDayCourseType[];
}

const TabPanel = ({ isFavorite, oneDayCourse }: TabPanelProps) => {
  const navigate = useNavigate();

  if (oneDayCourse.length === 0) {
    return (
      <>
        <TabErrorMessage>
          장소 리스트가 존재하지 않습니다!
          {isFavorite && (
            <RectangleButton
              text='장소 추가하기'
              onClick={() => navigate('/')}
            />
          )}
        </TabErrorMessage>
      </>
    );
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
