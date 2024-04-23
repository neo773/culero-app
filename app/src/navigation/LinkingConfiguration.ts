import { RootStackParamList } from "../types"
import { LinkingOptions } from "@react-navigation/native"
import * as Linking from "expo-linking"


const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],

  async getInitialURL() {
    const url = await Linking.getInitialURL()

    return url
  },

  subscribe(listener) {
    return () => {

    }
  },

  config: {
    screens: {
      HomeScreen: "home",
      InitialScreen: "initial",
      // SignIn: "signin",
      // SignUp: "signup",
      // ForgotPassword: "forgotpassword",
      // ConfirmEmail: "confirmemail/:email/:activationcode",
      // NewPassword: "resetpassword/:email/:resetcode",
    },
  },
}

export default linking
