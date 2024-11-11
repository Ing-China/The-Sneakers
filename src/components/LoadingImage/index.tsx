import {Image, View} from 'react-native';
import {LoadingImageProps} from './LoadingImageProps';
import {Icons} from '../../constants';
import styles from './style';

const LoadingImage: React.FC<LoadingImageProps> = ({imageStyle, iconSize}) => {
  return (
    <View style={[styles.container, imageStyle]}>
      <Icons.PLACEHOLDER width={iconSize} />
    </View>
  );
};
export default LoadingImage;
