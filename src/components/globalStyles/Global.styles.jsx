
// bütün projemizi ilgilendiren genel ayarlar burada yazilir. 

// google dan font alirken html e link olarak koymak daha hizli ve performansli. cünkü ilk önce html indirilir daha sonra component lar.

// * ile body ayni sey degil. Ana komponentlerde kalıyor body de

import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Girassol", cursive;

    }
`