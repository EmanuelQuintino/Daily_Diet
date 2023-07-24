import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import { StatusBar } from "react-native";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

import { Home } from "@screens/Home/index";
import { Loading } from "@components/Loading";
import { Statistics } from "@screens/Statistics";

export default function App() {
  const [fontLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={"transparent"}
        translucent
      />
      {fontLoaded ? <Statistics /> : <Loading />}
    </ThemeProvider>
  );
}
