import { Theme } from "@/theme";
import { BoxProps } from "@shopify/restyle";
import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import Box from "./Box";
import Text from "./Text";

type TBadge = BoxProps<Theme> & {
  label: string;
  overrideStyleBox?: StyleProp<ViewStyle>;
  textColor?: keyof Theme["colors"];
  textVariant?: keyof Theme["textVariants"];
  overrideStyleText?: StyleProp<TextStyle>;
};

const Badge = ({
  overrideStyleBox,
  overrideStyleText,
  label,
  backgroundColor = "secondary",
  paddingHorizontal = "m",
  paddingVertical = "s",
  borderRadius = "m",
  textColor = "black",
}: TBadge) => {
  return (
    <Box
      backgroundColor={backgroundColor}
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}
      borderRadius={borderRadius}
      style={overrideStyleBox}
    >
      <Text variant={"bodySmall"} color={textColor} style={overrideStyleText}>
        {label}
      </Text>
    </Box>
  );
};

export default Badge;
