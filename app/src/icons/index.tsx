import { View, ViewProps } from "react-native";
import { EditIcon } from "./EditIcon";
import { GoogleIcon } from "./GoogleIcon";
import { SearchIcon } from "./SearchIcon";
import Octicons from "@expo/vector-icons/Octicons";
import colors from "../../colors";
import { twMerge } from "tailwind-merge";

export type IconName = "edit" | "google" | "search" | "arrow-down";
export type IconProps = {
  name: IconName;
  className?: ViewProps["className"];
  color?: keyof typeof colors;
};

export const Icon = ({ name, color, className }: IconProps) => {
  return (
    <View className={twMerge("mx-1 justify-center", className)}>
      {name == "edit" && <EditIcon />}
      {name == "google" && <GoogleIcon />}
      {name == "search" && <SearchIcon />}
      {name == "arrow-down" && (
        <Octicons
          size={20}
          name="triangle-down"
          color={color ? colors[color] : colors["dark-grey"]}
        />
      )}
    </View>
  );
};
