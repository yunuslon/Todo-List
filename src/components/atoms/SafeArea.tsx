import { Theme } from "@/theme";
import { createBox } from "@shopify/restyle";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

const SafeArea = createBox<Theme, SafeAreaViewProps>(SafeAreaView);
export default SafeArea;
