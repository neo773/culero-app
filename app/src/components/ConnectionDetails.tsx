import { View, ViewProps } from "react-native";
import { Avatar } from "./Avatar";
import { StyledText } from "./StyledText";
import { twMerge } from "tailwind-merge";

type ConnectionDetailsProps = {
  userName: string;
  userPosition: string;
  userAvatar: string;
  isVerified?: boolean;
  className?: ViewProps["className"];
};

export const ConnectionDetails = ({
  userName,
  userPosition,
  userAvatar,
  isVerified,
  className,
}: ConnectionDetailsProps) => {
  return (
    <View className={twMerge("flex-row", className)}>
      <Avatar
        userImage={userAvatar}
        isVerified={isVerified}
        hasBadge={true}
        size={45}
      />
      <View className="ml-2">
        <StyledText weight={600} className="text-lg">
          {userName}
        </StyledText>
        <StyledText color="gray33">{userPosition}</StyledText>
      </View>
    </View>
  );
};
