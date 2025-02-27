import { useState } from 'react';
import { TravelCourses } from '../../../types';
import Tab from '../../common/Tabs/Tab/Tab';
import TabPanel from '../../common/Tabs/TabPanel/TabPanel';
import { TravelCourseContainer } from './TravelCourse.style';

interface TravelCourseProps {
  travelCourses: TravelCourses[];
  travelDays: number;
}

const TravelCourse = ({ travelCourses, travelDays }: TravelCourseProps) => {
  const [selectedTab, setSelectedTab] = useState(1);

  const onClickTab = (day: number) => {
    setSelectedTab(day);
  };

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
      />
    </TravelCourseContainer>
  );
};

export default TravelCourse;
