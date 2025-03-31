import { OneDayCourseType } from '../../../types';
import Tab from '../../common/Tabs/Tab/Tab';
import TabPanel from '../../common/Tabs/TabPanel/TabPanel';
import { TravelCourseContainer } from './TravelCourse.style';

interface TravelCourseProps {
  oneDayCourses: OneDayCourseType[];
  totalTravelDays: number;
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
  setSelectedPanel: React.Dispatch<React.SetStateAction<string>>;
}

const TravelCourse = ({
  oneDayCourses,
  totalTravelDays,
  selectedTab,
  setSelectedTab,
  setSelectedPanel,
}: TravelCourseProps) => {
  return (
    <TravelCourseContainer>
      <Tab
        totalTravelDays={totalTravelDays}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TabPanel
        oneDayCourse={oneDayCourses}
        setSelectedPanel={setSelectedPanel}
      />
    </TravelCourseContainer>
  );
};

export default TravelCourse;
