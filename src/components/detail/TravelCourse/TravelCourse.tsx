import { OneDayCourseType } from '../../../types';
import Tab from '../../common/Tabs/Tab/Tab';
import TabPanel from '../../common/Tabs/TabPanel/TabPanel';
import { TravelCourseContainer } from './TravelCourse.style';

interface TravelCourseProps {
  oneDayCourse: OneDayCourseType[];
  travelDays: number;
  selectedTab: number;
  onClickTab: (day: number) => void;
  onClickPanel: (placeName: string) => void;
}

const TravelCourse = ({ oneDayCourse, travelDays, selectedTab, onClickTab, onClickPanel }: TravelCourseProps) => {
  if (!oneDayCourse) return null;
  console.log(oneDayCourse);
  return (
    <TravelCourseContainer>
      <h3>여행 코스</h3>
      <Tab
        travelDays={travelDays}
        selectedTab={selectedTab}
        onClickTab={onClickTab}
      />
      <TabPanel
        oneDayCourse={oneDayCourse}
        onClickPanel={onClickPanel}
      />
    </TravelCourseContainer>
  );
};

export default TravelCourse;
