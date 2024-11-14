import {Alert, Text, View} from 'react-native';
import styles from './style';
import {useTheme} from '../../hooks';
import FlexibleTouchable from '../FlexibleTouchable';
import {HomeHeaderProps} from './homeHeaderProps';
import IconButton from '../IconButton';
import {Icons} from '../../constants';

const HomeHeader: React.FC<HomeHeaderProps> = ({currentLocation}) => {
  const {colors} = useTheme();

  const handlePressToMap1 = () => {
    return Alert.alert('Go to Map');
  };
  const handlePressToMap2 = () => {
    return Alert.alert('Go to Map');
  };
  const handlePressToNotifications = () => {
    return Alert.alert('Go to Notifications');
  };
  const handlePressToCart = () => {
    return Alert.alert('Go to Carts');
  };
  return (
    <View style={[styles.container, {backgroundColor: colors.secondary}]}>
      <View style={styles.leadingContainer}>
        <FlexibleTouchable
          onPress={handlePressToMap1}
          label={currentLocation}
        />
      </View>
      <View style={styles.actionContainer}>
        <IconButton
          onPress={handlePressToMap2}
          icon={<Icons.MAP height={30} width={30} color={colors.icon} />}
        />
        <IconButton
          onPress={handlePressToNotifications}
          icon={
            <Icons.NOTIFICATION height={30} width={30} color={colors.icon} />
          }
        />
        <IconButton
          onPress={handlePressToCart}
          icon={<Icons.CART height={30} width={30} color={colors.icon} />}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
