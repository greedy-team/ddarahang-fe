import { OneDayCourseType } from '../../../types';
import Tab from '../../common/Tabs/Tab/Tab';
import TabPanel from '../../common/Tabs/TabPanel/TabPanel';
import { TravelCourseContainer } from './TravelCourse.style';

interface TravelCourseProps {
  oneDayCourses: OneDayCourseType[];
  totalTravelDays: number;
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
}

const TravelCourse = ({ oneDayCourses, totalTravelDays, selectedTab, setSelectedTab }: TravelCourseProps) => {
  return (
    <TravelCourseContainer>
      <Tab
        totalTravelDays={totalTravelDays}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TabPanel
        isScrollPanels={true}
        oneDayCourse={oneDayCourses}
      />
    </TravelCourseContainer>
  );
};

export default TravelCourse;
