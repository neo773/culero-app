import { Pressable, PressableProps } from "react-native";
import { Icon, IconProps } from "../icons";

export type IconButtonProps = { iconProps: IconProps } & PressableProps;

export const IconButton = ({ iconProps, ...props }: IconButtonProps) => {
  return (
    <Pressable {...props}>
      <Icon {...iconProps} />
    </Pressable>
  );
};
