import { View, ViewProps } from "react-native";
import { EditIcon } from "./EditIcon";
import { GoogleIcon } from "./GoogleIcon";
import { SearchIcon } from "./SearchIcon";

export type IconName = "edit" | "google" | "search";
export type IconProps = { name: IconName; className?: ViewProps["className"] };

export const Icon = ({ name, className }: IconProps) => {
  return (
    <View className={`mx-1 justify-center ${className} `}>
      {name == "edit" && <EditIcon />}
      {name == "google" && <GoogleIcon />}
      {name == "search" && <SearchIcon />}
    </View>
  );
};
