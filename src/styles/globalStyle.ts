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
    body{
        background-color: var(--color-tertiary);
    }
    h1, h2, p, label{
        width: fit-content;
        color: var(--grey-0);
    }
    h1{
        font-size: var(--font-size-1);
    }
    h1, h2{
       font-weight : bold;
    }
    h2,p,label{
        font-size: var(--font-size-2);
    }
    button{
        cursor: pointer;
    }
    :root{
    --color-primary: #1D242C;
    --color-secondary: #1E1E1E;
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

    --font-size-1: 1.25rem;
    --font-size-2: 1rem;
    
    --border-radius: 6px;
}
`;
export default GlobalStyle;
