import { colors } from '../../../../styles/Theme';
import RectangleButton from '../../Button/RectangleButton/RectangleButton';
import { TabContainer, TabItem, TabList } from './Tab.style';

interface TabProps {
  travelDays: number;
}

/**
 * 추후 탭 기능 구현할 때, 선택 된 탭은
 * RectangleButton으로 조건부 렌더링 할 예정.
 */
const Tab = ({ travelDays }: TabProps) => {
  const arr = Array.from({ length: travelDays }, (_, i) => `DAY${i + 1}`);

  return (
    <TabContainer>
      <TabList>
        {arr.map((tab) => {
          return <TabItem key={tab}>{tab}</TabItem>;
        })}
        <TabItem>
          <RectangleButton
            text='DAY4'
            color={colors.WHITE}
            onClick={() => {}}
          />
        </TabItem>
      </TabList>
    </TabContainer>
  );
};

export default Tab;
