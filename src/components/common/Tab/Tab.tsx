import { colors } from '../../../styles/Theme';
import RectangleButton from '../Button/RectangleButton/RectangleButton';

/**추후 탭 기능 구현할 때, 선택 된 탭은
RectangleButton으로 조건부 렌더링 할 예정.*/
const Tab = () => {
  return (
    <div>
      <ul>
        {['Day1', 'Day2', 'Day3'].map((tab) => {
          return <li>{tab}</li>;
        })}
        <RectangleButton
          text='Day4'
          color={colors.WHITE}
          onClick={() => {}}
        />
      </ul>
    </div>
  );
};

export default Tab;
