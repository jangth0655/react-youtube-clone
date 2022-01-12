// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      colorActive: string;
      extraActive: string;

      black: {
        black: string;
        dark: string;
        light: string;
      };
      white: {
        white: string;
        dark: string;
      };
    };
  }
}
