import { TextProps, View, ViewProps } from "react-native";
import { Avatar } from "./Avatar";
import { StyledText } from "./StyledText";
import { twMerge } from "tailwind-merge";

type ConnectionDetailsProps = {
  userName: string;
  userPosition: string;
  userAvatar?: string;
  isVerified?: boolean;
  className?: ViewProps["className"];
  usernameTextClassName?: TextProps["className"];
  positionTextClassName?: TextProps["className"];
};

export const ConnectionDetails = ({
  userName,
  userPosition,
  userAvatar,
  isVerified,
  className,
  usernameTextClassName,
  positionTextClassName,
}: ConnectionDetailsProps) => {
  return (
    <View className={twMerge("flex-row", className)}>
      <Avatar
        userImage={userAvatar}
        isVerified={isVerified}
        hasBadge={true}
        size={45}
        badgeSize={22}
        hideBorder={true}
      />
      <View className="ml-2">
        <StyledText
          weight={600}
          className={twMerge("text-lg", usernameTextClassName)}
        >
          {userName}
        </StyledText>
        <StyledText color="gray33" className={positionTextClassName}>
          {userPosition}
        </StyledText>
      </View>
    </View>
  );
};
