import { View, ViewProps } from "react-native";
import { Card, StyledText } from "../components";
import { Icon, IconName } from ".";

const StackedIcons = ({
  names,
  spacing = 26,
}: {
  names: Array<IconName>;
  spacing?: number;
}) => {
  return (
    <View
      style={{ height: 51, width: spacing * (names.length + 1) + names.length }}
    >
      {names.map((name, index) => (
        <View
          key={name}
          style={{
            position: "absolute",
            left: index * spacing,
            top: 0,
            zIndex: index,
          }}
        >
          <Icon name={name} />
        </View>
      ))}
    </View>
  );
};

export type SocialMediaCardProps = {
  className?: ViewProps["className"];
};
export const SocialMediaCard = ({ className }: SocialMediaCardProps) => {
  return (
    <Card
      className={className}
      bodyComponent={
        <View className="flex items-center">
          <StyledText className="text-lg text-center">
            Your Social Media
          </StyledText>
          <View className="mt-8">
            <StyledText className="text-md text-center mb-8">Added</StyledText>
            <StackedIcons
              names={["instagram-color", "twitter-color", "linkedin-color"]}
            />
          </View>
          <View className="mt-8">
            <StyledText className="text-md text-center">
              Add to Elevate
            </StyledText>
            <StyledText className="text-md text-center mb-4">
              Your profile
            </StyledText>
            <View className="ml-4">
              <StackedIcons names={["github-color"]} />
            </View>
          </View>
        </View>
      }
    />
  );
};
