import {View} from 'react-native';
import styles from './style';
import {FlexibleSwiperProps} from './flexibleSwiperProps';
import Swiper from 'react-native-swiper';
import {CachedImage} from '@georstat/react-native-image-cache';
import LoadingImage from '../LoadingImage';
import {Radius} from '../../constants';

const FlexibleSwiper: React.FC<FlexibleSwiperProps> = ({
  imageUrlList,
  wrapperStyle,
  containerStyle,
  dotColor,
  activeDotColor,
  paginationStyle,
  autoPlay = false,
  isShowPagination = false,
  iconSize,
  loadingImageStyle,
  imageStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Swiper
        style={[styles.wrapper, wrapperStyle]}
        dotColor={dotColor}
        activeDotColor={activeDotColor}
        paginationStyle={[styles.paginationStyle, paginationStyle]}
        loop={true}
        autoplay={autoPlay}
        showsPagination={isShowPagination}>
        {imageUrlList.map((item, index) => {
          return (
            <CachedImage
              source={item.url}
              style={[imageStyle]}
              resizeMode="cover"
              imageStyle={{borderRadius: Radius.DEFAULT}}
              loadingImageComponent={() => (
                <LoadingImage
                  iconSize={iconSize}
                  imageStyle={loadingImageStyle}
                />
              )}
            />
          );
        })}
      </Swiper>
    </View>
  );
};

export default FlexibleSwiper;
