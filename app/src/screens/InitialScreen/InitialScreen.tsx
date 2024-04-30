import { View, Text, Alert } from "react-native";
import React from "react";
import { StyledPressable, StyledText } from "../../components";

const InitialScreen = ({}: {}) => {
  return (
    <View className="flex-1 bg-gray  items-center h-full py-20 px-12">
      <StyledText>
        Hello, here are your components. For starters, this is the default text
      </StyledText>
      <StyledText>Button:</StyledText>
      <StyledPressable
        onPress={() => {
          Alert.alert("I was pressed!");
        }}
      >
        I am a default btn
      </StyledPressable>

      <StyledPressable
        color="dark"
        textVariant={{ weight: 900 }}
        onPress={() => {
          Alert.alert("I was pressed!");
        }}
      >
        I am a blue btn with weight 900
      </StyledPressable>
      <StyledPressable
        color="dark"
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
        color="dark"
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
        className="mt-2"
        onPress={() => {
          Alert.alert("I was pressed!");
        }}
        leftIconProps={{ name: "google" }}
      >
        Continue with Google
      </StyledPressable>
    </View>
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
