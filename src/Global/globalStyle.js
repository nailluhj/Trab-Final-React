import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  color: black;
  font-family: 'Roboto', sans-serif;
}
body{
  background-color: #d2d2d2;
}
#root{
  position: relative;
}
`