import React from "react";
import colors from "../../colors";
import { Rating, SwipeRatingProps } from "react-native-ratings";
import { View, ViewProps } from "react-native";

const STAR_IMAGE = require("../../assets/star.png");
const STAR_DARK_IMAGE = require("../../assets/star_dark.png");
export const StyledStarRating = ({
  containerClassName,
  isDarkBg = false,
  ...props
}: SwipeRatingProps & {
  containerClassName?: ViewProps["className"];
  isDarkBg?: boolean;
}) => {
  return (
    <View className={containerClassName}>
      <Rating
        type="custom"
        ratingColor={colors["light-primary"]}
        ratingImage={isDarkBg ? STAR_DARK_IMAGE : STAR_IMAGE}
        imageSize={18}
        {...props}
      />
    </View>
  );
};
