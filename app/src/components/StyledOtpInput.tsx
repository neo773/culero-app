import { colorScheme } from "nativewind";
import { View, ViewProps, ViewStyle } from "react-native";
import { OtpInput, OtpInputProps } from "react-native-otp-entry";
import colors from "../../colors";

export type StyledOtpInput = { containerClassName: ViewProps["className"] };

export const StyledOtpInput = ({ containerClassName }: StyledOtpInput) => (
  <View className={`container ${containerClassName}`}>
    <OtpInput
      numberOfDigits={5}
      onTextChange={(text) => console.log(text)}
      onFilled={(text) => console.log(`OTP is ${text}`)}
      // https://github.com/anday013/react-native-otp-entry
      theme={{
        containerStyle: { display: "flex", justifyContent: "space-between" },
        pinCodeContainerStyle: {
          width: "18%",
          backgroundColor: colors.white,
          borderWidth: 0,
        },
        pinCodeTextStyle: {
          fontFamily: "Inter_400Regular",
        },
        focusedPinCodeContainerStyle: {
          borderColor: colors.primary,
        },
        focusStickStyle: {
          backgroundColor: colors.primary,
        },
      }}
    />
  </View>
);
