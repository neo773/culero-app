import React from "react";
import colors from "../../colors";
import { Rating, SwipeRatingProps } from "react-native-ratings";
import { View, ViewProps } from "react-native";

const STAR_IMAGE = require("../../assets/star.png");
export const StyledStarRating = ({
  containerClassName,
  ...props
}: SwipeRatingProps & { containerClassName?: ViewProps["className"] }) => {
  return (
    <View className={containerClassName}>
      <Rating
        type="custom"
        ratingColor={colors["light-primary"]}
        ratingImage={STAR_IMAGE}
        imageSize={18}
        {...props}
      />
    </View>
  );
};
