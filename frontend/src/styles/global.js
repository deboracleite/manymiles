import { createGlobalStyle } from 'styled-components';
import RobotoRegular from "../assets/fonts/Roboto/Roboto-Regular.woff";


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    
  }
  
  body {
    background: #fff;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }


  body, input, button {
    font-family: 'RobotoRegular', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  @font-face {
  font-family: "RobotoRegular";
  src: url(${RobotoRegular}) format('truetype');
}
`;