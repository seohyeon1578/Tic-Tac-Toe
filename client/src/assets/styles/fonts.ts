import { createGlobalStyle } from "styled-components";
import Rokaf from "../fonts/ROKAF-Sans-Bold.woff";

export default createGlobalStyle`
  @font-face {
    font-family: "ROKAF-Sans-Bold";
    src: local("ROKAF-Sans-Bold"),
    url(${Rokaf}) format('woff');
  }
`;