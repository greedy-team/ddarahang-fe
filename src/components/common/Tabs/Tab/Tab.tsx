import RectangleButton from '../../Button/RectangleButton/RectangleButton';
import { TabContainer, TabItem, TabList } from './Tab.style';

interface TabProps {
  totalTravelDays: number;
  selectedTab: number;
  onClickTab: (day: number) => void;
}

const Tab = ({ totalTravelDays, selectedTab, onClickTab }: TabProps) => {
  const tabs = Array.from({ length: totalTravelDays }, (_, i) => `DAY${i + 1}`);

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
              onClick={() => onClickTab(dayNumber)}
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
