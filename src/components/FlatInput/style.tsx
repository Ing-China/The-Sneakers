import {StyleSheet} from 'react-native';
import {Fonts, FontSizes, Padding} from '../../constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Padding.DEFAULT,
  },
  textInput: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.REGULAR,
  },
});
