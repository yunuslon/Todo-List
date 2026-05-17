import { Box, Button, SafeArea, Text } from "@/components/atoms";
import { Theme } from "@/theme";
import { useTheme } from "@shopify/restyle";
import React, { useMemo } from "react";
import { StyleSheet, TextInput } from "react-native";

const InitialName = () => {
  const theme = useTheme<Theme>();

  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <SafeArea flex={1}>
      <Box alignItems="center" paddingHorizontal="l" mt="xl">
        <Text variant="headingSemiBold" color="white" mb="s">
          What is Your Name ?
        </Text>
        <Text variant="bodySmall" color="softGrey" textAlign="center">
          Please provide your name, which we'll use for display and personalize
          your to-do experience.
        </Text>
      </Box>
      <Box flex={1} alignItems="center" justifyContent="center">
        <TextInput
          placeholder="Enter Your name"
          style={styles.inputStyle}
          placeholderTextColor={theme.colors.softGrey}
        />
      </Box>
      <Box marginHorizontal="l">
        <Button label="Get Start" />
      </Box>
    </SafeArea>
  );
};

export default InitialName;

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    inputStyle: {
      fontFamily: "Roboto-Medium",
      fontSize: 24,
      color: theme.colors.white,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.softGrey,
      paddingBottom: 16,
      paddingHorizontal: 2,
    },
  });
