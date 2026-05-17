import { ColorProps, createBox, useTheme } from "@shopify/restyle";
import React from "react";
import {
  ActivityIndicator,
  ColorValue,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import theme, { Theme } from "@/theme";
import Text from "./Text";

const BaseButton = createBox<Theme, TouchableOpacityProps>(TouchableOpacity);

type Props = React.ComponentProps<typeof BaseButton> &
  ColorProps<Theme> & {
    label: string;
    isLoading?: boolean;
    overrideStyleText?: StyleProp<TextStyle>;
    overrideColorIndicator?: ColorValue;
  };

const Button = ({
  label,
  isLoading,
  color = "primary",
  overrideStyleText,
  overrideColorIndicator,
  ...props
}: Props) => {
  const theme = useTheme<Theme>();

  const textColorProp =
    color === "primary" ? theme.colors.white : theme.colors.black;

  return (
    <BaseButton style={styles.base} backgroundColor={color} {...props}>
      <Text
        variant="title"
        style={[{ color: textColorProp }, overrideStyleText]}
      >
        {label}
      </Text>
      {isLoading ? (
        <ActivityIndicator color={overrideColorIndicator || textColorProp} />
      ) : null}
    </BaseButton>
  );
};

export default Button;

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    paddingVertical: theme.spacing.m,
    width: "100%",
    borderRadius: theme.borderRadii.m,
  },
});
