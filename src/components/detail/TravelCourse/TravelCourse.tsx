import { useState } from 'react';
import Tab from '../../common/Tabs/Tab/Tab';
import TabPanel from '../../common/Tabs/TabPanel/TabPanel';
import { TravelCourseContainer, TravelCourseLayout } from './TravelCourse.style';
import { adaptTravelCourse } from '../../../utils/adpatTravelCourse';
import type { TravelCourse } from '../../../types';
import TravelMapWrapper from '../../common/TravelMapWrapper/TravelMapWrapper';
import TravelMap from '../../common/TravelMap/TravelMap';
import VideoSection from '../Video/VideoSection';
import AddFavoriteModal from '../AddFavoriteModal/AddFavoriteModal';
import useMobile from '../../../hooks/screen/useMobile';

interface TravelCourseProps {
  travelCourse: TravelCourse;
  totalTravelDays: number;
}

const TravelCourse = ({ travelCourse, totalTravelDays }: TravelCourseProps) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const oneDayCourses = adaptTravelCourse(travelCourse ? [travelCourse] : [], selectedTab);

  const { isMobile, isMobileMapVisible, setIsMobileMapVisible } = useMobile();

  return (
    <>
      <TravelCourseLayout>
        <VideoSection
          isMobileMapVisible={isMobileMapVisible}
          setIsMobileMapVisible={setIsMobileMapVisible}
          videoUrl={travelCourse.videoUrl}
          travelCourse={travelCourse}
        />

        {isMobileMapVisible && (
          <TravelMapWrapper key={selectedTab}>
            <TravelMap oneDayCourses={oneDayCourses} />
          </TravelMapWrapper>
        )}

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
      </TravelCourseLayout>

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
