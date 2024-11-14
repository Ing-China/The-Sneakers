import React from 'react';
import {ScrollView, SafeAreaView, Alert, View, FlatList} from 'react-native';
import styles from './style';
import {
  FlatButton,
  FlatInput,
  FlexibleSwiper,
  HomeHeader,
  Section,
  Touchable,
} from '../../components';
import {useLocation, useSwiper, useTheme} from '../../hooks';
import {Icons} from '../../constants';
import {useTranslation} from 'react-i18next';

const HomeScreen: React.FC = () => {
  const {colors} = useTheme();
  const {location} = useLocation();
  const {t} = useTranslation();
  const {imageList} = useSwiper();

  const handlePressToSearch = () => {
    return Alert.alert('Go to Search');
  };

  const handlePressToSeeMore = () => {
    return Alert.alert('Go to see more');
  };

  const itemSeparator = () => <View style={{height: 10}} />;

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.primary}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader currentLocation={location.currentLocation} />
        <Touchable onPress={handlePressToSearch}>
          <FlatInput
            placeholder={t('searchProduct')}
            suffixIcon={<Icons.SEARCH color={colors.icon} />}
            containerStyle={styles.inputContainer}
            onActionButtonPress={handlePressToSearch}
          />
        </Touchable>

        <FlexibleSwiper
          imageUrlList={imageList}
          imageStyle={styles.swiperImageStyle}
          containerStyle={styles.swiperContainer}
          loadingImageStyle={styles.swiperLoadingImageStyle}
          autoPlay={true}
        />

        <Section
          title={t('newArrival')}
          actionButton={
            <FlatButton
              label={t('seeMore')}
              containerStyle={styles.sectionContainer}
              labelStyle={[
                styles.sectionActionButtonLabel,
                {color: colors.text},
              ]}
              onPress={handlePressToSeeMore}
            />
          }>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={itemSeparator}
            contentContainerStyle={styles.productContentContainer}
            keyExtractor={item => item.id.toString()}
          />
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
