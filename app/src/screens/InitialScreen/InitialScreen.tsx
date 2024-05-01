import { View, Text, Alert, ScrollView } from "react-native";
import React from "react";
import {
  StyledPressable,
  StyledText,
  StyledTextInput,
  SearchBar,
  SortBy,
  HorizontalDivider,
  SocialMediaConnections,
  StyledStarRating,
  OverallRateCard,
} from "../../components";
import { StyledOtpInput } from "../../components/StyledOtpInput";
import { PasswordStrength } from "../../components/PasswordStrength";

const InitialScreen = ({}: {}) => {
  return (
    <ScrollView>
      <View className="flex-1 bg-dark-gray  items-center h-full py-20 px-12">
        <StyledText>
          Hello, here are your components. For starters, this is the default
          text
        </StyledText>
        <StyledText>Buttons:</StyledText>
        <StyledPressable
          onPress={() => {
            Alert.alert("I was pressed!");
          }}
        >
          I am a default btn
        </StyledPressable>

        <StyledPressable
          color="primary"
          className="mt-2"
          textVariant={{ weight: 900 }}
          onPress={() => {
            Alert.alert("I was pressed!");
          }}
        >
          I am a blue btn with weight 900
        </StyledPressable>
        <StyledPressable
          className="mt-2"
          color="primary"
          fw
          onPress={() => {
            Alert.alert("I was pressed!");
          }}
        >
          I am a full width btn
        </StyledPressable>
        <StyledPressable
          color="white"
          className="mt-2"
          onPress={() => {
            Alert.alert("I was pressed!");
          }}
          rightIconProps={{ name: "edit" }}
        >
          Edit Profile
        </StyledPressable>

        <StyledPressable
          color="primary"
          rounded
          className="mt-2"
          textVariant={{ color: "white" }}
          onPress={() => {
            Alert.alert("I was pressed!");
          }}
        >
          Search
        </StyledPressable>
        <StyledPressable
          fw
          color="white"
          className="mt-2 border"
          onPress={() => {
            Alert.alert("I was pressed!");
          }}
          leftIconProps={{ name: "google" }}
        >
          Continue with Google
        </StyledPressable>
        <StyledTextInput
          containerClassName="mt-2"
          placeholder="Enter your email addres"
        />
        <StyledOtpInput containerClassName="mt-2" />
        <SearchBar
          placeholder="Discover and review people"
          containerClassName="mt-2"
        />
        <SearchBar
          placeholder="Enter social link"
          containerClassName="mt-2"
          onSubmit={(value) => Alert.alert(`Submitted with value ${value}`)}
        />
        <SortBy
          items={[
            { value: "Recently added", label: "Recently added" },
            { value: "smth else", label: "Something else" },
          ]}
          onSelect={(item) => console.log("selected item", item)}
        />

        <StyledText>Divider: </StyledText>
        <HorizontalDivider className="my-6" />
        <PasswordStrength type="weak" />
        <PasswordStrength type="strong" />

        <SocialMediaConnections />

        <StyledStarRating />
        <OverallRateCard
          className="mt-4"
          overallRating={4.5}
          professionalismRating={4}
          reliabilityRating={5}
          communicationRating={2}
        />
      </View>
    </ScrollView>
    // <View className="flex-1 bg-white justify-center items-center h-full">
    //   <Text
    //     className="text-black
    //    font-bold text-2xl"
    //   >
    //     CUL
    //   </Text>
    // </View>
  );
};

export default InitialScreen;
