import { Pressable, View } from "react-native";
import { StyledText } from "./StyledText";
import { Icon } from "../icons";
import { useEffect, useState } from "react";
import RNPickerSelect from "react-native-picker-select";

type Item = { value: string; label: string };
type SortByProps = {
  items: Array<Item>;
  onSelect: (item: Item) => void;
};

export const SortBy = ({ items, onSelect }: SortByProps) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  useEffect(() => {
    onSelect(items[0]);
  }, []);

  return (
    <View className="flex-row justify-end">
      <View className="hidden md:block">
        <StyledText
          className="leading-6 text-gray33 text-base sm:hidden md:block"
          weight={300}
        >
          Sort by:
        </StyledText>
      </View>
      <RNPickerSelect
        items={items}
        value={items[selectedItemIndex].value}
        onValueChange={(newValue, index) => {
          // setSelectedLabel(newValue);
          setSelectedItemIndex(index);
          onSelect(items[index]);
        }}
        style={{
          inputWeb: {
            paddingTop: 1,
            fontFamily: "Inter_400Regular",
            backgroundColor: "transparent",
          },
        }}
      >
        <View className="flex-row items-center justify-center">
          <StyledText className="leading-6 text-gray33 text-base" weight={300}>
            Sort by:
          </StyledText>
          <StyledText className="text-dark-gray mr-2 ml-2" weight={600}>
            {items[selectedItemIndex].label}
          </StyledText>
          <Icon name="arrow-down" size={22} />
        </View>
      </RNPickerSelect>
    </View>
  );
};
