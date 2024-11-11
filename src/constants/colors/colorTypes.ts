import {Appearance} from 'react-native';
import DarkTheme from './darkTheme';
import LightTheme from './lightTheme';

export type Themes = {
  primary: string;
  secondary: string;
  secondaryReversed: string;
  background: string;
  text: string;
  buttonBackground: string;
  buttonText: string;
  icon: string;
};

const isDark = Appearance.getColorScheme() === 'dark';
export const colors: Themes = isDark ? DarkTheme : LightTheme;
