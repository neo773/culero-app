import { Pressable, PressableProps } from "react-native";
import { Icon } from "../icons";

export type FavouriteButtonProps = {
  isFav: boolean;
  size?: number;
} & PressableProps;
export const FavouriteButton = ({
  isFav,
  size = 20,
  ...props
}: FavouriteButtonProps) => {
  return (
    <Pressable {...props}>
      <Icon
        name={isFav ? "heart" : "heart-o"}
        color={isFav ? "deep-red" : "black"}
        size={size}
      />
    </Pressable>
  );
};
