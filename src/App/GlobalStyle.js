import {createGlobalStyle} from "styled-components";
import background from "./background.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background-image: url("${background}");
        background-size:cover;
        background-position: center;
        background-color: rgb(145, 208, 233);
        font-family: 'Pangolin', cursive;
    }
`;