import { createGlobalStyle } from "styled-components";
import background from "./assets/background_4.jpg"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  ol,
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
  
  a {
    text-decoration: none;
    color: #333;
  }

  button {
    padding: 10px;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    border: 0 none;
    border-radius: 6px;
    padding: 10px 20px;
    color: #fff;
    background-color: #3040C4;
  }

  select {
    border: none;
    border-radius: 10px;
  }

  .off {
    background: #ECF6FE;
    color: #ccc;
  }
  `;

  export default GlobalStyle;