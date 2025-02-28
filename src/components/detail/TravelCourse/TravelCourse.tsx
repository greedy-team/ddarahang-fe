import { TravelCourses } from '../../../types';
import Tab from '../../common/Tabs/Tab/Tab';
import TabPanel from '../../common/Tabs/TabPanel/TabPanel';
import { TravelCourseContainer } from './TravelCourse.style';

interface TravelCourseProps {
  travelCourses: TravelCourses[];
  travelDays: number;
  selectedTab: number;
  selectedPanel: string | null;
  onClickTab: (day: number) => void;
  onClickPanel: (placeName: string) => void;
}

const TravelCourse = ({
  travelCourses,
  travelDays,
  selectedTab,
  selectedPanel,
  onClickTab,
  onClickPanel,
}: TravelCourseProps) => {
  return (
    <TravelCourseContainer>
      <h3>여행 코스</h3>
      <Tab
        travelDays={travelDays}
        selectedTab={selectedTab}
        onClickTab={onClickTab}
      />
      <TabPanel
        travelCourses={travelCourses}
        selectedTab={selectedTab}
        selectedPanel={selectedPanel}
        onClickPanel={onClickPanel}
      />
    </TravelCourseContainer>
  );
};

export default TravelCourse;
