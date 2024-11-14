import {StyleProp, ViewStyle} from 'react-native';

export interface IconButtonProps {
  onPress?: () => void;
  icon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
