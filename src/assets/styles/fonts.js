import { createGlobalStyle } from "styled-components";
import Montserrat from "../fonts/Montserrat-var.ttf";
import SuperFunky from "../fonts/SuperFunky.ttf";
import Jalembe from "../fonts/Jalembe.ttf";

export const GlobalFonts = createGlobalStyle`
@font-face {
  font-family: "Montserrat";
  src: url(${Montserrat}) format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "SuperFunky";
  src: url(${SuperFunky}) format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Jalembe";
  src: url(${Jalembe}) format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
`;
