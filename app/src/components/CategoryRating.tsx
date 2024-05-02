import { View } from "react-native";
import { StyledText } from "./StyledText";
import { PercentageBar } from "./PercentageBar";
export type CategoryRatingProps = {
  maxRating?: number;
  rating: number;
  hideBar?: boolean;
  hideNumbers?: boolean;
  categoryName: string;
};
export const CategoryRating = ({
  maxRating = 5,
  rating,
  categoryName,
  hideBar,
  hideNumbers,
}: CategoryRatingProps) => {
  return (
    <View className="flex-row justify-between my-1 items-center">
      <View className="w-5/12">
        <StyledText weight={600} className="text-xs" color="darkgrey">
          {categoryName}
        </StyledText>
      </View>
      {!hideBar && (
        <View className="flex-grow mr-2">
          <PercentageBar maxValue={maxRating} value={rating} height={15} />
        </View>
      )}
      {!hideNumbers && (
        <View>
          <StyledText weight={700} className="text-sm">
            {rating.toFixed(1)}
            <StyledText
              weight={500}
              className="text-xs"
            >{` / ${maxRating}`}</StyledText>
          </StyledText>
        </View>
      )}
    </View>
  );
};
