import { createGlobalStyle } from 'styled-components';
import { colors, size } from './styles/Theme';

const GlobalStyle = createGlobalStyle`
  /* @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-style: normal;
  } */

  @font-face {
    font-family: 'Pretendard-SemiBold';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  
  @font-face {
  font-family: 'Pretendard-SemiBold';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

  body {
    margin: 0;
    padding: 0;
    display: flex;
    font-family: 'Pretendard-Regular', sans-serif;
    vertical-align: baseline;
    line-height: 1;
    font-size: 100%;
}

h1,
h2,
h3,
h4 {
    margin: 0;
    padding: 0;
}

p {
    margin: 0;
    padding: 0;
}

button {
    cursor: pointer;
}

img {
    border: 0;
}

a {
    text-decoration: none;
    color: inherit;
    display: inline-block;
}

  &::-webkit-scrollbar {
    width: ${size.SIZE_006};
    height: auto;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.GRAY_200};
    border-radius: 15px;
   width:${size.SIZE_006};;
  }

  &::-webkit-scrollbar-corner {
    background-color: transparent;  /* 스크롤 코너 색상 */
  }

/**Firefox 브라우저 
스크롤바도 추가 해야함 */
`;

export default GlobalStyle;
