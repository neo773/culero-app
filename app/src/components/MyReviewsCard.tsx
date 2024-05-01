import { View, ViewProps } from "react-native";
import { Card } from "./Card";
import { StyledText } from "./StyledText";
import { StyledStarRating } from "./StarRating";
import { CategoryRating } from "./CategoryRating";

export type MyReviewsCardProps = {
  professionalismRating: number;
  reliabilityRating: number;
  communicationRating: number;
  overallRating: number;
  className?: ViewProps["className"];
};

export const MyReviewsCard = ({
  className,
  professionalismRating,
  communicationRating,
  reliabilityRating,
  overallRating,
}: MyReviewsCardProps) => {
  return (
    <Card
      className={className}
      bodyComponent={
        <View className="p-2">
          <View className="flex-row justify-between">
            <StyledText weight={600} className="text-xl">
              My Reviews
            </StyledText>
            <View className="items-end">
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

          <View className="flex-grow mt-6">
            <CategoryRating
              hideNumbers={true}
              categoryName="Professionalsim"
              rating={professionalismRating}
            />
            <CategoryRating
              hideNumbers={true}
              categoryName="Reliability"
              rating={reliabilityRating}
            />
            <CategoryRating
              hideNumbers={true}
              categoryName="Communication"
              rating={communicationRating}
            />
          </View>
        </View>
      }
    />
  );
};
