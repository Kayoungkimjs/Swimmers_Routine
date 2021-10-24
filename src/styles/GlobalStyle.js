import { createGlobalStyle } from "styled-components";
import assets from './assets/background_1.png'
// import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
    background: url(${assets});
    background-size: cover;
  }
  
  ol,
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  
  a {
    text-decoration: none;
    color: #333;
  }

  .App {
    width: 800px;
    margin: 0 auto;
  }
  `;

  export default GlobalStyle;