import { Panels } from './TabPanel.style';
import PlaceCardItem from '../../PlaceCard/PlaceCardItem';
import { TravelCourses } from '../../../../types';

interface TabPanelProps {
  travelCourses: TravelCourses[];
  selectedTab: number;
}

const TabPanel = ({ travelCourses, selectedTab }: TabPanelProps) => {
  return (
    <Panels>
      {travelCourses.map((course) => {
        if (course.day === selectedTab) {
          return (
            <PlaceCardItem
              key={course.orderInDay}
              travelCources={course}
              onClick={() => {}}
            />
          );
        }
      })}
    </Panels>
  );
};

export default TabPanel;
