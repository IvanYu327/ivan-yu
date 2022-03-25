import { createGlobalStyle } from "styled-components";

import ProximaNova from "./Proxima Nova Font.woff";

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${ProximaNova}) format('woff'),
        font-weight: 300;
        font-style: normal;
    }
`;
