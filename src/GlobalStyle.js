import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   
   body, #root {
       padding: 0;
        margin: 0;
        height: 100vh;

        .App {
           height: 100%;
        }

        font-family: Roboto;
   }


`;

export default GlobalStyle