import {StyleProp, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';

export interface IconButtonProps {
  onPress: () => void;
  icon: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
