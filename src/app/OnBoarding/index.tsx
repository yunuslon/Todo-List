import { Box, Button, SafeArea, Text } from "@/components/atoms";
import CardIntro from "@/components/molecules/CardIntro";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Dimensions, StyleSheet } from "react-native";

export default function Index() {
  return (
    <SafeArea flex={1}>
      <Box alignItems="center" mt="l">
        <Image
          source={require("@/assets/images/Line.png")}
          style={styles.img1}
          contentFit="fill"
        />
        <Image
          source={require("@/assets/images/character.png")}
          style={styles.img}
          contentFit="contain"
        />
      </Box>
      <Box style={styles.CardIntro} marginHorizontal="s">
        <CardIntro />
      </Box>
      <Box mt="xl" alignItems="center" marginHorizontal="s" flex={1}>
        <Text variant="heading" color="white" textAlign="center">
          {`Instant Chat Message &\nNotification`}
        </Text>
        <Box flex={2 / 3} />
        <Button
          label="Get Start"
          mb="l"
          onPress={() => router.replace("/InitialName")}
        />
        <Box>
          <Text color="softGrey" variant="caption">
            By continuing, you accept our{" "}
            <Text color="white" textDecorationLine="underline">
              terms of services
            </Text>
          </Text>
          <Text color="softGrey" variant="caption">
            and acknowledge receipt of our{" "}
            <Text color="white" textDecorationLine="underline">
              privacy policy.
            </Text>
          </Text>
        </Box>
      </Box>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 295,
    height: 320,
    position: "absolute",
  },
  img1: {
    width: Dimensions.get("window").width,
    height: 366,
  },
  CardIntro: { marginTop: -50 },
});
