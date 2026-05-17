import { useAppStore } from "@/stores";
import Theme from "@/theme";
import { ThemeProvider } from "@shopify/restyle";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "Roboto-Light": require("@/assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular": require("@/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("@/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-SemiBold": require("@/assets/fonts/Roboto-SemiBold.ttf"),
    "Roboto-Bold": require("@/assets/fonts/Roboto-Bold.ttf"),
  });

  const hasHydrated = useAppStore((s) => s.hasHydrated);

  const hasCompletedOnboarding = useAppStore((s) => s.hasCompletedOnboarding); // HIDE SPLASH ONLY WHEN EVERYTHING READY

  useEffect(() => {
    if (!loaded || !hasHydrated) return;

    SplashScreen.hideAsync();

    if (hasCompletedOnboarding) {
      // router.replace("/(tabs)");
    } else {
      router.replace("/OnBoarding");
    }
  }, [loaded, hasHydrated, hasCompletedOnboarding]);

  if (!loaded || !hasHydrated) {
    return null;
  }

  return (
    <ThemeProvider theme={Theme}>
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: Theme.colors.mainBackground,
          },
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </ThemeProvider>
  );
}
