import React from "react";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation/navigation";
import { store } from "./store/store";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import "../global.css";
import {
  useFonts,
  Inter_100Thin,
  Inter_900Black,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";

const App = () => {
  const isLoadingComplete = useCachedResources();

  const [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black, // <- equivalent to Inter_900Black: Inter_900Black
  });

  return (
    <SafeAreaProvider>
      {isLoadingComplete && fontsLoaded && (
        <Provider store={store}>
          <Navigation />
          <StatusBar style={"light"} />
        </Provider>
      )}
    </SafeAreaProvider>
  );
};

export default App;
