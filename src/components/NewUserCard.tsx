import { View, ViewProps } from "react-native";
import { Card } from "./Card";
import { VerticalDivider } from "./VerticalDivider";
import { StyledText } from "./StyledText";
import { StyledPressable } from "./StyledPressable";
import { twMerge } from "tailwind-merge";
import { ConnectionDetails } from "./ConnectionDetails";

export type NewUserCardProps = {
  userName: string;
  userPosition: string;
  className?: ViewProps["className"];
};
export const NewUserCard = ({
  userName,
  userPosition,
  className,
}: NewUserCardProps) => {
  return (
    <Card
      className={twMerge("bg-primary", className)}
      bodyComponent={
        <View className="flex-row ">
          <View className="flex-1">
            <ConnectionDetails
              usernameTextClassName="text-white"
              positionTextClassName="text-white7"
              userName={userName}
              userPosition={userPosition}
            />
          </View>
          <VerticalDivider />
          <View className="flex-1">
            <StyledText color="white7">
              This Person is not yet on Culero
            </StyledText>
            <StyledText
              color="white"
              weight={600}
            >{`Be the first to invite ${userName} to join!`}</StyledText>
            <StyledPressable
              className="self-end mt-2"
              color="white"
              textVariant={{ color: "primary", weight: 500 }}
              textClassName="w-32"
            >
              Invite
            </StyledPressable>
          </View>
        </View>
      }
    />
  );
};
