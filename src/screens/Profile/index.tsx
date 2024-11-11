import {FlatList, SafeAreaView, View} from 'react-native';
import ProfileHeader from '../../components/ProfileHeader';
import {useProfile, useTheme, useThemeContext} from '../../hooks';
import ProfileMenuItem from '../../components/ProfileMenuItem';
import {ProfileMenu} from '../../models';
import {useMemo, useState} from 'react';
import styles from './style';

const ProfileScreen: React.FC = () => {
  // const {colors} = useThemeContext();
  const {colors} = useTheme();
  const {menuItems} = useProfile();
  const [isDelay, setIsDelay] = useState(true);

  useMemo(() => {
    const timer = setTimeout(() => {
      setIsDelay(false);
    }, 1);
    return () => clearTimeout(timer);
  }, []);

  const renderHeader = () => <ProfileHeader />;
  const renderProfileItem = ({item}: {item: ProfileMenu}) => (
    <ProfileMenuItem item={item} />
  );
  const itemSeparator = () => <View style={{height: 10}} />;

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
      {!isDelay && (
        <FlatList
          ListHeaderComponent={renderHeader}
          data={menuItems}
          renderItem={renderProfileItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.containerStyle}
          ItemSeparatorComponent={itemSeparator}
        />
      )}
    </SafeAreaView>
  );
};

export default ProfileScreen;
