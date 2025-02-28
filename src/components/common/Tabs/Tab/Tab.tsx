import RectangleButton from '../../Button/RectangleButton/RectangleButton';
import { TabContainer, TabItem, TabList } from './Tab.style';

interface TabProps {
  travelDays: number;
  selectedTab: number;
  onClickTab: (day: number) => void;
}

const Tab = ({ travelDays, selectedTab, onClickTab }: TabProps) => {
  const arr = Array.from({ length: travelDays }, (_, i) => `DAY${i + 1}`);

  return (
    <TabContainer>
      <TabList>
        {arr.map((tab, index) => {
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
