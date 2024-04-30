import { View, ViewProps } from "react-native";
import { EditIcon } from "./EditIcon";
import { GoogleIcon } from "./GoogleIcon";

export type IconName = "edit" | "google";
export type IconProps = { name: IconName; className?: ViewProps["className"] };

export const Icon = ({ name, className }: IconProps) => {
  return (
    <View className={`mx-1 ${className}`}>
      {name == "edit" && <EditIcon />}
      {name == "google" && <GoogleIcon />}
    </View>
  );
};
