import { RootStackParamList } from "../types";
import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import HomeScreen from "../screens/HomeScreen";
import InitialScreen from "../screens/InitialScreen";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],

  async getInitialURL() {
    const url = await Linking.getInitialURL();

    return url;
  },

  subscribe(listener) {
    return () => {};
  },

  config: {
    screens: {
      HomeScreen: {
        screens: HomeScreen,
      },
      InitialScreen: {
        path: "initial",
        screens: InitialScreen,
      },
      // SignIn: "signin",
      // SignUp: "signup",
      // ForgotPassword: "forgotpassword",
      // ConfirmEmail: "confirmemail/:email/:activationcode",
      // NewPassword: "resetpassword/:email/:resetcode",
    },
  },
};

export default linking;
