import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-style: normal;
  }

  body {
    margin: 0;
    font-family: 'Pretendard-Regular', sans-serif;
    padding: 0;
    display: flex;
    vertical-align: baseline;
    line-height: 1;
    font-size: 100%;
    box-sizing: border-box;
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

`;

export default GlobalStyle;
