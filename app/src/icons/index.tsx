import { View, ViewProps } from "react-native";
import { EditIcon } from "./EditIcon";
import { GoogleIcon } from "./GoogleIcon";
import { SearchIcon } from "./SearchIcon";
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5Brands from "@expo/vector-icons/FontAwesome5";
import MaterialCommunity from "@expo/vector-icons/MaterialCommunityIcons";
import Material from "@expo/vector-icons/MaterialIcons";
import colors from "../../colors";
import { twMerge } from "tailwind-merge";
import { MessageIcon } from "./MessageIcon";
import { ReviewIcon } from "./ReviewIcon";

export type IconName =
  | "edit"
  | "google"
  | "search"
  | "arrow-down"
  | "github-square"
  | "instagram-square"
  | "linkedin-square"
  | "heart"
  | "heart-o"
  | "dots-horizontal"
  | "message"
  | "verified"
  | "review";

export type IconProps = {
  name: IconName;
  size?: number;
  className?: ViewProps["className"];
  color?: keyof typeof colors;
};

export const Icon = ({ name, color, size, className }: IconProps) => {
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
      {name == "github-square" && (
        <FontAwesome
          size={size}
          name="github-square"
          color={color ? colors[color] : colors["black"]}
        />
      )}
      {name == "linkedin-square" && (
        <FontAwesome
          size={size}
          name="linkedin-square"
          color={color ? colors[color] : colors["black"]}
        />
      )}
      {name == "instagram-square" && (
        <FontAwesome5Brands
          size={size}
          name="instagram-square"
          color={color ? colors[color] : colors["black"]}
        />
      )}
      {name == "heart" && (
        <FontAwesome
          size={size}
          name="heart"
          color={color ? colors[color] : colors["black"]}
        />
      )}
      {name == "heart-o" && (
        <FontAwesome
          size={size}
          name="heart-o"
          color={color ? colors[color] : colors["black"]}
        />
      )}
      {name == "dots-horizontal" && (
        <MaterialCommunity
          size={size}
          name="dots-horizontal"
          color={color ? colors[color] : colors["black"]}
        />
      )}
      {name == "message" && <MessageIcon />}
      {name == "verified" && (
        <Material
          size={size}
          name={"verified"}
          color={color ? colors[color] : colors["black"]}
        />
      )}
      {name == "review" && <ReviewIcon />}
    </View>
  );
};
