import { colorScheme } from "nativewind";
import { View, ViewProps, ViewStyle } from "react-native";
import { OtpInput, OtpInputProps } from "react-native-otp-entry";
import colors from "../../colors";
import { twMerge } from "tailwind-merge";

export type StyledOtpInput = {
  containerClassName: ViewProps["className"];
  size?: number;
};

export const StyledOtpInput = ({
  containerClassName,
  size = 70,
}: StyledOtpInput) => (
  <View className={twMerge("container flex-shrink", containerClassName)}>
    <OtpInput
      numberOfDigits={5}
      onTextChange={(text) => console.log(text)}
      onFilled={(text) => console.log(`OTP is ${text}`)}
      // https://github.com/anday013/react-native-otp-entry
      theme={{
        containerStyle: {
          display: "flex",
          flexShrink: 1,
        },
        pinCodeContainerStyle: {
          width: size,
          height: size,
          flexShrink: 1,
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
