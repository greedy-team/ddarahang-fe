import { Panels } from './TabPanel.style';
import PlaceCardItem from '../../PlaceCard/PlaceCardItem';
import { TravelCourses } from '../../../../types';

interface TabPanelProps {
  travelCources: Omit<TravelCourses, 'day'>[];
}

const TabPanel = ({ travelCources }: TabPanelProps) => {
  return (
    <Panels>
      {travelCources.map((course) => {
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
