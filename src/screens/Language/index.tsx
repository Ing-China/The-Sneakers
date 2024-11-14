import React, {useMemo} from 'react';
import {FlatList, View} from 'react-native';
import styles from './style';
import {useLanguage, useTheme} from '../../hooks';
import {Icons, Spacing} from '../../constants';
import FlexibleTouchable from '../../components/FlexibleTouchable';

const LanguageScreen: React.FC = () => {
  const {colors} = useTheme();
  const {languages, isSelected, onLanguageSelected} = useLanguage();

  const languageItem = ({item}) => {
    return (
      <FlexibleTouchable
        onPress={() => onLanguageSelected(item.code)}
        label={item.name}
        prefixIcon={item.prefixIcon}
        suffixIconColor={colors.icon}
        suffixIcon={isSelected(item.code) ? Icons.RadioFill : Icons.RADIO}
        prefixIconHeight="50"
        prefixIconWidth="50"
        suffixIconHeight="20"
        suffixIconWidth="20"
      />
    );
  };

  const itemSeperator = useMemo(() => {
    return () => <View style={{height: Spacing.DEFAULT}} />;
  }, []);

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <FlatList
        data={languages}
        renderItem={languageItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={itemSeperator}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default LanguageScreen;
