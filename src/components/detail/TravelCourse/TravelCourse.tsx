import { OneDayCourseType } from '../../../types';
import Tab from '../../common/Tabs/Tab/Tab';
import TabPanel from '../../common/Tabs/TabPanel/TabPanel';
import { TravelCourseContainer } from './TravelCourse.style';

interface TravelCourseProps {
  oneDayCourses: OneDayCourseType[];
  totalTravelDays: number;
  selectedTab: number;
  onClickTab: (day: number) => void;
  onClickPanel: (placeName: string) => void;
}

const TravelCourse = ({ oneDayCourses, totalTravelDays, selectedTab, onClickTab, onClickPanel }: TravelCourseProps) => {
  return (
    <TravelCourseContainer>
      <h3>여행 코스</h3>
      <Tab
        totalTravelDays={totalTravelDays}
        selectedTab={selectedTab}
        onClickTab={onClickTab}
      />
      <TabPanel
        oneDayCourse={oneDayCourses}
        onClickPanel={onClickPanel}
      />
    </TravelCourseContainer>
  );
};

export default TravelCourse;
