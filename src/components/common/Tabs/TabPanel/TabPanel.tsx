import { Panels } from './TabPanel.style';
import PlaceCardItem from '../../PlaceCard/PlaceCardItem';
import { OneDayCourseType } from '../../../../types';
import { useSelectedPanel } from '../../../../hooks/select/useSelectedPanel';

interface TabPanelProps {
  ondayCourse: OneDayCourseType[];
  onClickPanel: (placeName: string) => void;
}

const TabPanel = ({ ondayCourse, onClickPanel }: TabPanelProps) => {
  const { selectedPanel } = useSelectedPanel();

  return (
    <Panels>
      {ondayCourse.map((course, index) => {
        return (
          <PlaceCardItem
            key={index}
            number={index}
            ondayCourse={course}
            onClickPanel={onClickPanel}
            selectedPanel={selectedPanel}
          />
        );
      })}
    </Panels>
  );
};

export default TabPanel;
