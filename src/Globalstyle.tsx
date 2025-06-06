import { createGlobalStyle } from 'styled-components';
import { colors, size } from './styles/Theme';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff')
    , url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.ttf') format('ttf');

    font-style: normal;
  } 


  @font-face {
    font-family: 'Ownglyph_ParkDaHyun';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2411-3@1.0/Ownglyph_ParkDaHyun.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
  font-family: 'Pretendard-SemiBold';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
  }

  @font-face {
  font-family: 'Pretendard-Bold';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
  }

  @media all and (max-width: 750px) {
  html {
    font-size: 85%; 
    }
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
      overflow-x: hidden;
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
    color: inherit;
    display: inline-block;
}

  &::-webkit-scrollbar {
    width: ${size.SIZE_005};
    height: ${size.SIZE_005};
    background-color:   transparent;  
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.GRAY_300};
    border-radius: ${size.SIZE_009};
    width:${size.SIZE_006};

   &:hover{
     background: ${colors.GREY_400};
   }
  }

  &::-webkit-scrollbar-corner {
    background-color: transparent;  
  }

  .gm-style-iw-ch {
    font-size: 18px;
    font-weight: bold;    
    font-family: "Pretendard-SemiBold";
    color: ${colors.BLACK};
  }

  .gm-style-iw {
    font-family: "Pretendard-Regular";

    & a {
      outline: none;
    }
  }


/**Firefox 브라우저 
스크롤바도 추가 해야함 */
`;

export default GlobalStyle;
