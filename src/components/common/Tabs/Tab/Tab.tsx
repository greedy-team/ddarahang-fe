import { colors } from '../../../../styles/Theme';
import RectangleButton from '../../Button/RectangleButton/RectangleButton';
import { TabContainer, TabItem, TabList } from './Tab.style';

/**
 * 추후 탭 기능 구현할 때, 선택 된 탭은
 * RectangleButton으로 조건부 렌더링 할 예정.
*/
const Tab = () => {
  return (
    <TabContainer>
      <TabList>
        {['DAY1', 'DAY2', 'DAY3'].map((tab) => {
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
