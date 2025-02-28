import { Panels } from './TabPanel.style';
import PlaceCardItem from '../../PlaceCard/PlaceCardItem';
import { OneDayCourseType } from '../../../../types';

interface TabPanelProps {
  oneDayCourse: OneDayCourseType[];
  onClickPanel: (placeName: string) => void;
}

const TabPanel = ({ oneDayCourse, onClickPanel }: TabPanelProps) => {
  return (
    <Panels>
      {oneDayCourse.map((course) => {
        return (
          <PlaceCardItem
            key={course.orderInday}
            orderInDay={course.orderInday}
            oneDayCourse={course}
            onClickPanel={onClickPanel}
          />
        );
      })}
    </Panels>
  );
};

export default TabPanel;
