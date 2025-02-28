import { OneDayCourseType } from '../../../types';
import Tab from '../../common/Tabs/Tab/Tab';
import TabPanel from '../../common/Tabs/TabPanel/TabPanel';
import { TravelCourseContainer } from './TravelCourse.style';

interface TravelCourseProps {
  ondayCourse: OneDayCourseType[];
  travelDays: number;
  selectedTab: number;
  onClickTab: (day: number) => void;
  onClickPanel: (placeName: string) => void;
}

const TravelCourse = ({ ondayCourse, travelDays, selectedTab, onClickTab, onClickPanel }: TravelCourseProps) => {
  return (
    <TravelCourseContainer>
      <h3>여행 코스</h3>
      <Tab
        travelDays={travelDays}
        selectedTab={selectedTab}
        onClickTab={onClickTab}
      />
      <TabPanel
        ondayCourse={ondayCourse}
        onClickPanel={onClickPanel}
      />
    </TravelCourseContainer>
  );
};

export default TravelCourse;
