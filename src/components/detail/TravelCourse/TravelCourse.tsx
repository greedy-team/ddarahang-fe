import { useState } from 'react';
import type { TravelCourse } from '../../../types';
import TravelMapWrapper from '../../common/TravelMapWrapper/TravelMapWrapper';
import TravelMap from '../../common/TravelMap/TravelMap';
import AddFavoriteModal from '../AddFavoriteModal/AddFavoriteModal';
import useMobile from '../../../hooks/screen/useMobile';
import { adaptTravelCourse } from '../../../utils/adaptTravelCourse';
import TravelCourseContents from './TravelCourseContents';

interface TravelCourseProps {
  travelCourse: TravelCourse;
  totalTravelDays: number;
}

const TravelCourse = ({ travelCourse, totalTravelDays }: TravelCourseProps) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const oneDayCourses = adaptTravelCourse(travelCourse ? [travelCourse] : [], selectedTab);

  const { isMobile } = useMobile();

  return (
    <>
      <TravelCourseContents
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        travelCourse={travelCourse}
        oneDayCourses={oneDayCourses}
        totalTravelDays={totalTravelDays}
      />

      {!isMobile && (
        <TravelMapWrapper key={selectedTab}>
          <AddFavoriteModal />
          <TravelMap oneDayCourses={oneDayCourses} />
        </TravelMapWrapper>
      )}
    </>
  );
};

export default TravelCourse;
