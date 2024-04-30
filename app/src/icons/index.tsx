import { View, ViewProps } from "react-native";
import { EditIcon } from "./EditIcon";

export type IconName = "edit" | "linkedin";
export type IconProps = { name: IconName; className?: ViewProps["className"] };

export const Icon = ({ name, className }: IconProps) => {
  return (
    <View className={`mx-1 ${className}`}>
      {name == "edit" && <EditIcon />}
    </View>
  );
};
