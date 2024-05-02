import { Pressable, PressableProps, View } from "react-native";
import { Icon, IconProps } from "../icons";
import { StyledText } from "./StyledText";

export type IconButtonProps = {
  iconProps: IconProps;
  label?: string;
} & PressableProps;

export const IconButton = ({ iconProps, label, ...props }: IconButtonProps) => {
  return (
    <View className="flex items-center">
      <Pressable {...props}>
        <Icon {...iconProps} />
      </Pressable>
      {label && <StyledText>{label}</StyledText>}
    </View>
  );
};
