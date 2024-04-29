import React from "react";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation/navigation";
import { store } from "./store/store";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import "../global.css";

const App = () => {
  const isLoadingComplete = useCachedResources();

  return (
    <SafeAreaProvider>
      {isLoadingComplete && (
        <Provider store={store}>
          <Navigation />
          <StatusBar style={"light"} />
        </Provider>
      )}
    </SafeAreaProvider>
  );
};

export default App;
