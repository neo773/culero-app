import { View, ViewProps } from "react-native";
import { Card } from "./Card";
import { StyledText } from "./StyledText";
import { StyledPressable } from "./StyledPressable";
import { HorizontalDivider } from "./HorizontalDivider";
import { IconButton } from "./IconButton";

export type InviteCardProps = {
  className?: ViewProps["className"];
};

export const InviteCard = ({ className }: InviteCardProps) => {
  return (
    <Card
      className={className}
      bodyComponent={
        <View className="flex pt-8 pb-12">
          <StyledText weight={500} lg className="mb-2">
            Invite More Connections
          </StyledText>
          <StyledText>
            Invite your colleagues, clients, and friends to join and build a
            trusted community. Let's make a platform that thrives on meaningful
            professional connections!
          </StyledText>
          <StyledPressable
            color="primary"
            textVariant={{ color: "white" }}
            className="my-8 self-center"
          >
            Share invite code
          </StyledPressable>
          <View className="flex-row items-center">
            <HorizontalDivider className="flex-1" />
            <StyledText weight={600} color="nickel">
              {"  "}
              Or{"  "}
            </StyledText>
            <HorizontalDivider className="flex-1" />
          </View>
          <StyledText className="my-8 text-center">Invite with</StyledText>
          <View className="flex-row justify-around">
            <IconButton
              onPress={() => console.log("pressed")}
              iconProps={{ name: "linkedin-color" }}
              label="Linkedin"
            />
            <IconButton
              onPress={() => console.log("pressed")}
              iconProps={{ name: "instagram-color" }}
              label="Google"
            />
            <IconButton
              onPress={() => console.log("pressed")}
              iconProps={{ name: "github-color" }}
              label="Facebook"
            />
          </View>
        </View>
      }
    />
  );
};
