import { Panels } from './TabPanel.style';
import PlaceCardItem from '../../PlaceCard/PlaceCardItem';
import { OneDayCourseType } from '../../../../types';

interface TabPanelProps {
  oneDayCourse: OneDayCourseType[];
  setSelectedPanel: React.Dispatch<React.SetStateAction<string>>;
}

const TabPanel = ({ oneDayCourse, setSelectedPanel }: TabPanelProps) => {
  return (
    <Panels>
      {oneDayCourse.map((course) => {
        return (
          <PlaceCardItem
            key={course.orderInday}
            orderInDay={course.orderInday}
            oneDayCourse={course}
            setSelectedPanel={setSelectedPanel}
          />
        );
      })}
    </Panels>
  );
};

export default TabPanel;
