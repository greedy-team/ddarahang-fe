import { TRAVELCOURSES } from '../../../constants';
import Tab from '../../common/Tabs/Tab/Tab';
import TabPanel from '../../common/Tabs/TabPanel/TabPanel';
import { TravelCourseContainer } from './TravelCourse.style';

const TravelCourse = () => {
  return (
    <TravelCourseContainer>
      <h3>여행 코스</h3>
      <Tab />
      <TabPanel travelCources={TRAVELCOURSES} />
    </TravelCourseContainer>
  );
};

export default TravelCourse;
