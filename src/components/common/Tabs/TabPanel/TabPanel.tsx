import { Panels } from './TabPanel.style';
import PlaceCardItem from '../../PlaceCard/PlaceCardItem';
import { TravelCourses } from '../../../../types';
import { colors } from '../../../../styles/Theme';

interface TabPanelProps {
  travelCourses: TravelCourses[];
  selectedTab: number;
  selectedPanel: string | null;
  onClickPanel: (placeName: string) => void;
}

const TabPanel = ({ travelCourses, selectedTab, onClickPanel, selectedPanel, isActive }: TabPanelProps) => {
  return (
    <Panels>
      {travelCourses.map((course) => {
        if (course.day === selectedTab) {
          if (course.placeName === selectedPanel) {
            return (
              <PlaceCardItem
                key={course.orderInDay}
                color={colors.PRIMARY}
                travelCources={course}
                onClickPanel={onClickPanel}
              />
            );
          }
          return (
            <PlaceCardItem
              key={course.orderInDay}
              color={colors.WHITE}
              travelCources={course}
              onClickPanel={onClickPanel}
            />
          );
        }
      })}
    </Panels>
  );
};

export default TabPanel;
