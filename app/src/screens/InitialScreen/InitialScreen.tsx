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
        onPress={() => {
          Alert.alert("I was pressed!");
        }}
      >
        I am a default blue btn
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
