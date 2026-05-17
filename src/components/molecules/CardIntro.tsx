import { Box, Text } from "@/components/atoms";
import Theme from "@/theme";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";

const CardIntro = () => {
  return (
    <Box>
      <Box
        backgroundColor="cardPrimaryBackground"
        padding="m"
        borderRadius="m"
        style={styles.card}
        zIndex={99}
      >
        <Box
          backgroundColor="primary"
          justifyContent="center"
          alignItems="center"
          borderRadius="l"
          width={24}
          height={24}
        >
          <Entypo name="check" size={15} color={Theme.colors.white} />
        </Box>
        <Box flex={1}>
          <Text variant="body" color="white">
            Design workshop
          </Text>
          <Text variant="bodySmall" color="softGrey">
            7,june,2023
          </Text>
        </Box>
        <Entypo name="flag" size={24} color={Theme.colors.red} />
      </Box>
      <Box
        backgroundColor="cardPrimaryBackground"
        padding="m"
        borderRadius="m"
        style={[styles.card, styles.transform]}
      >
        <Box
          backgroundColor="primary"
          justifyContent="center"
          alignItems="center"
          borderRadius="l"
          width={24}
          height={24}
        >
          <Entypo name="check" size={15} color={Theme.colors.white} />
        </Box>
        <Box flex={1}>
          <Text variant="body" color="white">
            Create New Post
          </Text>
          <Text variant="bodySmall" color="softGrey">
            7,june,2023
          </Text>
        </Box>
        <Entypo name="flag" size={24} color={Theme.colors.green} />
      </Box>
    </Box>
  );
};

export default CardIntro;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    gap: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  transform: {
    marginTop: -5,
    transform: [
      {
        rotate: "-5deg",
      },
    ],
  },
});
