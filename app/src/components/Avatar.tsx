import { Userpic } from "react-native-userpic";
import colors from "../../colors";
import { View } from "react-native";
import { Icon } from "../icons";
const ANONYMOUS_IMAGE = require("../../assets/anonymous.png");
export type AvatarProps = {
  userImage?: string;
  isAnonymous?: boolean;
  size?: number;
  hasBadge?: boolean;
  isVerified?: boolean;
  badgeSize?: number;
};
export const Avatar = ({
  userImage,
  isAnonymous,
  size = 40,
  badgeSize = 20,
  hasBadge,
  isVerified,
}: AvatarProps) => {
  return (
    <View className="pb-2 pr-2">
      <Userpic
        source={
          userImage && !isAnonymous ? { uri: userImage } : ANONYMOUS_IMAGE
        }
        defaultSource={ANONYMOUS_IMAGE}
        radius={2000}
        size={size}
        style={{ borderWidth: 1, borderColor: colors.black }}
      />
      {hasBadge && (
        <View className="absolute bottom-0 right-0">
          <Icon
            name="verified"
            size={badgeSize}
            color={isVerified ? "light-green" : "dark-grey"}
          />
        </View>
      )}
    </View>
  );
};
