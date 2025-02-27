import { TravelCourses } from '../../../types';
import Tab from '../../common/Tabs/Tab/Tab';
import TabPanel from '../../common/Tabs/TabPanel/TabPanel';
import { TravelCourseContainer } from './TravelCourse.style';

interface TravelCourseProps {
  travelCourses: TravelCourses[];
  // travelCourses: Omit<TravelCourses, 'day'>[];
}

const TravelCourse = ({ travelCourses }: TravelCourseProps) => {
  return (
    <TravelCourseContainer>
      <h3>여행 코스</h3>
      <Tab />
      <TabPanel travelCourses={travelCourses} />
    </TravelCourseContainer>
  );
};

export default TravelCourse;
