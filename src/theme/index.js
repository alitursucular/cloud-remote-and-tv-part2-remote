import { createGlobalStyle } from "styled-components";
import miniReset from "./miniReset";

const GlobalStyles = createGlobalStyle`
    ${miniReset};
    
    * {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 1.618; // the golden ratio
    }
    
    *:focus {
        outline: none;
    }
    
    input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    
    /* Firefox */
    input[type="number"] {
        -moz-appearance: textfield;
    }
`;

export default GlobalStyles;
