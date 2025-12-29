import { createGlobalStyle } from 'styled-components';
import { colors, size } from './styles/Theme';

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'Pretendard-Regular';
  src: url('/fonts/Pretendard-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Pretendard-SemiBold';
  src: url('/fonts/Pretendard-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Pretendard-Bold';
  src: url('/fonts/Pretendard-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Ownglyph_ParkDaHyun';
  src: url('/fonts/Ownglyph_ParkDaHyun.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
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
    --font-logo: 'Ownglyph_ParkDaHyun';
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

@keyframes skeleton-shimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
`;

export default GlobalStyle;
