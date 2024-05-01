import { Userpic } from "react-native-userpic";
import colors from "../../colors";
const ANONYMOUS_IMAGE = require("../../assets/anonymous.png");
export type AvatarProps = {
  userImage?: string;
  isAnonymous?: boolean;
  size?: number;
};
export const Avatar = ({ userImage, isAnonymous, size = 40 }: AvatarProps) => {
  return (
    <Userpic
      source={userImage && !isAnonymous ? { uri: userImage } : ANONYMOUS_IMAGE}
      defaultSource={ANONYMOUS_IMAGE}
      radius={2000}
      size={size}
      style={{ borderWidth: 1, borderColor: colors.black }}
    />
  );
};
