import { TravelCourses } from '../../../types';
import Tab from '../../common/Tabs/Tab/Tab';
import TabPanel from '../../common/Tabs/TabPanel/TabPanel';
import { TravelCourseContainer } from './TravelCourse.style';

interface TravelCourseProps {
  travelCourses: Omit<TravelCourses, 'day'>[];
  travelDays: number;
}

const TravelCourse = ({ travelCourses, travelDays }: TravelCourseProps) => {
  return (
    <TravelCourseContainer>
      <h3>여행 코스</h3>
      <Tab travelDays={travelDays} />
      <TabPanel travelCourses={travelCourses} />
    </TravelCourseContainer>
  );
};

export default TravelCourse;
