import {StyleSheet} from 'react-native';
import {FontSizes, Gap, Padding, Radius} from '../../constants';

export default StyleSheet.create({
  wrapper: {},
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Padding.DEFAULT,
    borderRadius: Radius.DEFAULT,
  },
  leadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Gap.DEFAULT,
  },
  label: {
    fontSize: FontSizes.large,
  },
});
