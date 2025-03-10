// src/styles/globalStyles.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
    --color-text-primary: #333;
    --color-text-secondary: #666;
    --color-background-hover: rgb(10, 1, 1);
    --color-badge: red;
    --color-badge-text: white;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Beatrice Display Trial', sans-serif;
    background-color: #f3f3f3;
    color:rgb(2, 4, 15);
    line-height: 1.6;
    max-width: 100%;
    overflow-x: hidden;
    ${'' /* padding: 0px 5%; */}
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;


