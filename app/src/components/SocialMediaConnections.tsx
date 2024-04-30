import { Button, View } from "react-native";
import { StyledText } from "./StyledText";
import { StyledPressable } from "./StyledPressable";
import { HorizontalDivider } from "./HorizontalDivider";
import { ReactElement, ReactNode } from "react";
import { Icon } from "../icons";

const SocialMediaConnection = ({
  description,
  onPressConnect,
  platformName,
  SocialMediaIcon,
}: {
  description: string;
  platformName: string;
  onPressConnect: () => void;
  SocialMediaIcon: ReactElement;
}) => {
  return (
    <View className="flex-row max-w-full items-center">
      {SocialMediaIcon}
      <View className="flex-auto">
        <StyledText color="gray35">{description}</StyledText>
      </View>
      <View className="flex-none">
        <StyledPressable
          color="light"
          textVariant={{ weight: 600 }}
          textClassName="text-sm"
          onPress={onPressConnect}
        >
          Connect to {platformName}
        </StyledPressable>
      </View>
    </View>
  );
};

export const SocialMediaConnections = () => (
  <View className="w-full">
    <SocialMediaConnection
      SocialMediaIcon={
        <Icon name="linkedin-square" size={40} className="mr-2" />
      }
      platformName="LinkedIn"
      onPressConnect={() => console.log("press")}
      description={
        "Connect your LinkedIn account to showcase your professional background and network"
      }
    />
    <HorizontalDivider className="my-2" />

    <SocialMediaConnection
      SocialMediaIcon={
        <Icon name="instagram-square" size={40} className="mr-2" />
      }
      onPressConnect={() => console.log("press")}
      platformName="Instagram"
      description={
        "Connect your Instagram account to share a glimpse of your creative side"
      }
    />
    <HorizontalDivider className="my-2" />

    <SocialMediaConnection
      SocialMediaIcon={<Icon name="github-square" size={40} className="mr-2" />}
      onPressConnect={() => console.log("press")}
      platformName="GitHub"
      description={
        "Connect your GitHub account to showcase your coding projects and contributions"
      }
    />
  </View>
);
