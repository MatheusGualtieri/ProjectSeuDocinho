import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        list-style: none;
        text-decoration: none;  
        text-align: center;

        font-family: 'inter', sans-serif;
    }

    button{
        cursor: pointer;
    }
    :root{
    --color-primary: #1D242C;
    --color-secondary: ##1E1E1E;
    --color-tertiary: #14191F;
    --color-image: #E4EC97
;

    --color-sucess: #219653;
    --color-negative: #EB5757;
    --color-add-product: #FFFFFF;


    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
}
`;
export default GlobalStyle;
