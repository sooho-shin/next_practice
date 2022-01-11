import { DefaultTheme } from 'styled-components';
 
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      [name in 'xs' | 'sm' | 'md' | 'lg' | 'xl']: number;
    };
  }
}