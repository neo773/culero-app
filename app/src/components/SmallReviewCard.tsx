import { Alert, View, ViewProps } from "react-native";
import { Card } from "./Card";
import { StyledText } from "./StyledText";
import { Avatar } from "./Avatar";
import { StyledStarRating } from "./StarRating";
import { FavouriteButton } from "./FavouriteButton";
import { CategoryRating } from "./CategoryRating";
import { IconButton } from "./IconButton";

export type SmallReviewCardProps = {
  professionalismRating: number;
  reliabilityRating: number;
  communicationRating: number;
  overallRating: number;
  className?: ViewProps["className"];
  userImage?: string;
  isFavourite: boolean;
  userName: string;
  isUserVerified?: boolean;
};

export const SmallReviewCard = ({
  className,
  professionalismRating,
  reliabilityRating,
  communicationRating,
  overallRating,
  userImage,
  isFavourite,
  userName,
  isUserVerified,
}: SmallReviewCardProps) => {
  return (
    <Card
      className={className}
      bodyComponent={
        <View className="px-4">
          <IconButton
            className="self-end"
            iconProps={{ name: "dots-horizontal", color: "gray", size: 25 }}
            onPress={() => {
              Alert.alert("Settings");
            }}
          />
          <View className="flex justify-center items-center">
            <Avatar
              userImage={userImage}
              hasBadge={true}
              isVerified={isUserVerified}
            />
            <StyledText weight={500} className="text-lg">
              {userName}
            </StyledText>
            <StyledStarRating readonly startingValue={overallRating} />
          </View>
          <View className="flex-grow mt-4 mb-4">
            <CategoryRating
              hideBar={true}
              categoryName="Professionalsim"
              rating={professionalismRating}
            />
            <CategoryRating
              hideBar={true}
              categoryName="Reliability"
              rating={reliabilityRating}
            />
            <CategoryRating
              hideBar={true}
              categoryName="Communication"
              rating={communicationRating}
            />
          </View>
        </View>
      }
      footerComponent={
        <View className="mt-4 flex-row justify-between items-center px-2">
          <FavouriteButton size={24} isFav={isFavourite} onPress={() => {}} />
          <IconButton iconProps={{ name: "message" }} onPress={() => {}} />
        </View>
      }
    />
  );
};
