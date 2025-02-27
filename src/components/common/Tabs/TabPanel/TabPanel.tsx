import { Panels } from './TabPanel.style';
import PlaceCardItem from '../../PlaceCard/PlaceCardItem';
import { TravelCourses } from '../../../../types';

interface TabPanelProps {
  travelCourses: TravelCourses[];
}

const TabPanel = ({ travelCourses }: TabPanelProps) => {
  return (
    <Panels>
      {travelCourses.map((course) => {
        return (
          <PlaceCardItem
            key={course.orderInDay}
            travelCources={course}
            onClick={() => {}}
          />
        );
      })}
    </Panels>
  );
};

export default TabPanel;
