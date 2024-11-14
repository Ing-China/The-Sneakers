import React from 'react';
import {Text, View} from 'react-native';
import Touchable from '../Touchable';
import styles from './style';
import {FlexibleTouchableProps} from './flexibleTouchableProps';
import {useTheme} from '../../hooks';

const FlexibleTouchable: React.FC<FlexibleTouchableProps> = ({
  onPress,
  label,
  prefixIcon,
  suffixIcon,
  wrapperStyle,
  containerStyle,
  leadingContainerStyle,
  labelStyle,
  suffixIconColor,
  prefixIconColor,
  suffixIconHeight,
  suffixIconWidth,
  prefixIconHeight,
  prefixIconWidth,
}) => {
  const {colors} = useTheme();
  return (
    <Touchable onPress={onPress} style={[styles.wrapper, wrapperStyle]}>
      <View
        style={[
          styles.container,
          containerStyle,
          {backgroundColor: colors.secondary},
        ]}>
        <View style={[styles.leadingContainer, leadingContainerStyle]}>
          {prefixIcon &&
            React.createElement(prefixIcon, {
              color: prefixIconColor,
              width: prefixIconWidth,
              height: prefixIconHeight,
            })}
          <Text
            style={[styles.label, labelStyle, {color: colors.text}]}
            numberOfLines={1}>
            {label}
          </Text>
        </View>
        {suffixIcon &&
          React.createElement(suffixIcon, {
            color: suffixIconColor,
            width: suffixIconWidth,
            height: suffixIconHeight,
          })}
      </View>
    </Touchable>
  );
};

export default FlexibleTouchable;
