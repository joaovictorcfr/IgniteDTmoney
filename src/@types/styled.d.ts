import "styled-components";
import { defaultTheme } from "../Styles/Themes/Default";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface defaultTheme extends ThemeType {}
}
