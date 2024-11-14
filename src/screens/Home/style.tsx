import {StyleSheet} from 'react-native';
import {
  FontSizes,
  Gap,
  Padding,
  Radius,
  Screen_Dimensions,
  Spacing,
} from '../../constants';

export default StyleSheet.create({
  headerContainer: {},
  headerContentContainerStyle: {},
  container: {
    flex: 1,
  },
  inputContainer: {
    justifyContent: 'space-between',
    borderRadius: Radius.DEFAULT,
    margin: Spacing.DEFAULT,
  },
  swiperImageStyle: {
    height: 200,
    marginHorizontal: Spacing.DEFAULT,
  },
  swiperContainer: {
    height: 200,
  },
  swiperLoadingImageStyle: {
    height: 200,
    width: Screen_Dimensions.WIDTH - 30,
    marginHorizontal: Spacing.DEFAULT,
    borderRadius: Radius.DEFAULT,
  },
  sectionContainer: {
    paddingVertical: Padding.DEFAULT,
  },
  sectionActionButtonLabel: {
    fontSize: FontSizes.large,
  },
  productContentContainer: {},
});
