import {useDispatch, useSelector} from 'react-redux';
import {ColorSchemeName} from 'react-native';
import {useCallback} from 'react';
import {DarkTheme, LightTheme} from '../../constants';
import {setThemeActions} from '../../store/actions';
import {AppDispatch, RootState} from '../../store';

export default function useTheme() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch<AppDispatch>();

  const setColorTheme = useCallback(
    (themeName: ColorSchemeName) => {
      dispatch(setThemeActions(themeName));
    },
    [dispatch],
  );

  const colors = theme === 'dark' ? DarkTheme : LightTheme;

  return {
    theme,
    setColorTheme,
    colors,
  };
}
