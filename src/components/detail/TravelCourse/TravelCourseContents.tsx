import useMobile from '../../../hooks/screen/useMobile';
import { OneDayCourseType, TravelCourse } from '../../../types';
import Tab from '../../common/Tabs/Tab/Tab';
import TabPanel from '../../common/Tabs/TabPanel/TabPanel';
import TravelMap from '../../common/TravelMap/TravelMap';
import TravelMapWrapper from '../../common/TravelMapWrapper/TravelMapWrapper';
import VideoSection from '../Video/VideoSection';
import { TravelCourseLayout, TravelCourseContainer, VideoAndMapSection } from './TravelCourse.style';

interface TravelCourseContentsProps {
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
  travelCourse: TravelCourse;
  oneDayCourses: OneDayCourseType[];
  totalTravelDays: number;
  selectedTab: number;
}

const TravelCourseContents = ({
  setSelectedTab,
  totalTravelDays,
  travelCourse,
  oneDayCourses,
  selectedTab,
}: TravelCourseContentsProps) => {
  const { isMobileMapVisible, setIsMobileMapVisible, isMobile } = useMobile();

  return (
    <TravelCourseLayout>
      <VideoAndMapSection $isVisible={isMobileMapVisible}>
        <VideoSection
          isMobileMapVisible={isMobileMapVisible}
          setIsMobileMapVisible={setIsMobileMapVisible}
          videoUrl={travelCourse.videoUrl}
          travelCourse={travelCourse}
        />

        {isMobileMapVisible && isMobile && (
          <TravelMapWrapper key={selectedTab}>
            <TravelMap oneDayCourses={oneDayCourses} />
          </TravelMapWrapper>
        )}
      </VideoAndMapSection>

      <TravelCourseContainer>
        <Tab
          totalTravelDays={totalTravelDays}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <TabPanel
          setIsMobileMapVisible={setIsMobileMapVisible}
          isScrollPanels={true}
          oneDayCourse={oneDayCourses}
        />
      </TravelCourseContainer>
    </TravelCourseLayout>
  );
};

export default TravelCourseContents;
