import { TextInput, TextInputProps, View } from "react-native";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

export type StyledTextInputProps = TextInputProps & {
  containerClassName?: ViewProps["className"];
};
export const StyledTextInput = ({
  containerClassName,
  ...props
}: StyledTextInputProps) => {
  return (
    <View className={`container bg-white rounded-md p-3 ${containerClassName}`}>
      <TextInput style={{ fontFamily: "Inter_400Regular" }} {...props} />
    </View>
  );
};
