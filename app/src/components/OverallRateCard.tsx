import { View, ViewProps } from "react-native";
import { Card } from "./Card";
import { StyledText } from "./StyledText";
import { CategoryRating } from "./CategoryRating";

export type OverallRateCardProps = {
  overallRating: number;
  maxRating?: number;
  professionalismRating: number;
  reliabilityRating: number;
  communicationRating: number;
  className?: ViewProps["className"];
};

export const OverallRateCard = ({
  maxRating = 5,
  overallRating,
  communicationRating,
  professionalismRating,
  reliabilityRating,
  className,
}: OverallRateCardProps) => {
  return (
    <Card
      className={className}
      bodyComponent={
        <View className="flex-row">
          <View className="p-1 align-center justify-center mr-2">
            <StyledText weight={700} className="text-3xl text-center">
              {overallRating.toLocaleString("en", { maximumFractionDigits: 1 })}
              <StyledText
                weight={300}
                className="text-lg"
              >{`/${maxRating}`}</StyledText>
            </StyledText>
            <StyledText weight={500} color="nickel">
              Overall Rate
            </StyledText>
          </View>
          <View className="flex-grow">
            <CategoryRating
              categoryName="Professionalsim"
              rating={professionalismRating}
            />
            <CategoryRating
              categoryName="Reliability"
              rating={reliabilityRating}
            />
            <CategoryRating
              categoryName="Communication"
              rating={communicationRating}
            />
          </View>
        </View>
      }
    />
  );
};
