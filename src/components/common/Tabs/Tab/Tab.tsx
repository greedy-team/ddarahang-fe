import RectangleButton from '../../Button/RectangleButton/RectangleButton';
import { TabContainer, TabItem, TabList } from './Tab.style';

interface TabProps {
  totalTravelDays: number;
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
}

const Tab = ({ totalTravelDays, selectedTab, setSelectedTab }: TabProps) => {
  const tabs = Array.from({ length: totalTravelDays }, (_, i) => `${i + 1}일차`);

  return (
    <TabContainer>
      <TabList>
        {tabs.map((tab, index) => {
          const dayNumber = index + 1;
          if (dayNumber === selectedTab) {
            return (
              <TabItem key={tab}>
                <RectangleButton
                  text={tab}
                  onClick={() => {}}
                />
              </TabItem>
            );
          }
          return (
            <TabItem
              key={tab}
              onClick={() => setSelectedTab(dayNumber)}
            >
              {tab}
            </TabItem>
          );
        })}
      </TabList>
    </TabContainer>
  );
};

export default Tab;
