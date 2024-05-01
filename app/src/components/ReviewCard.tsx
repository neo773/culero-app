import { Alert, View, ViewProps } from "react-native";
import { Card } from "./Card";
import { StyledText } from "./StyledText";
import { Avatar } from "./Avatar";
import { StyledStarRating } from "./StarRating";
import { FavouriteButton } from "./FavouriteButton";

export type RatingCardProps = {
  professionalismRating: number;
  reliabilityRating: number;
  communicationRating: number;
  overallRating: number;
  className?: ViewProps["className"];
  userImage?: string;
  isAnonymous?: boolean;
  isFavourite: boolean;
  review: string;
  date: Date;
};

const Rating = ({ category, value }: { category: string; value: number }) => {
  return (
    <View className="flex items-center">
      <StyledText weight={600} color="darkgrey" className="text-sm">
        {category}
      </StyledText>
      <StyledText weight={700} className="text-lg">
        {value.toFixed(1)}
      </StyledText>
    </View>
  );
};

export const ReviewCard = ({
  className,
  professionalismRating,
  reliabilityRating,
  communicationRating,
  overallRating,
  review,
  date,
  userImage,
  isAnonymous,
  isFavourite,
}: RatingCardProps) => {
  return (
    <Card
      className={className}
      headerComponent={
        <View className="flex-row justify-between p-2 items-center pb-4">
          <View className="flex-row">
            <Avatar userImage={userImage} isAnonymous={isAnonymous} />
            <View className="ml-2">
              <StyledText weight={700} className="text-3xl">
                {overallRating.toLocaleString("en", {
                  maximumFractionDigits: 1,
                })}
                <StyledText
                  weight={300}
                  className="text-lg"
                >{`/ 5`}</StyledText>
              </StyledText>

              <StyledStarRating readonly startingValue={overallRating} />
            </View>
          </View>
          <FavouriteButton
            onPress={() => Alert.alert("love")}
            isFav={isFavourite}
          />
        </View>
      }
      bodyComponent={
        <View className="flex-row my-8">
          <View>
            <StyledText color="darkgrey">Review:</StyledText>
          </View>
          <View className="flex-auto px-4">
            <StyledText weight={500}>{review}</StyledText>
          </View>
        </View>
      }
      footerComponent={
        <View className="mt-4">
          <View className="flex-row justify-around">
            <Rating category="Professionalism" value={professionalismRating} />
            <Rating category="Reliability" value={reliabilityRating} />
            <Rating category="Communication" value={communicationRating} />
          </View>
          <View>
            <StyledText
              color="gray83"
              className="text-xs text-right mt-2"
            >{`Posted on: ${date.toLocaleDateString()}`}</StyledText>
          </View>
        </View>
      }
    />
  );
};
