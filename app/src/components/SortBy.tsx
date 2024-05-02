import { Pressable, View } from "react-native";
import { StyledText } from "./StyledText";
import { Icon } from "../icons";
import { useState } from "react";
import RNPickerSelect from "react-native-picker-select";

type Item = { value: string; label: string };
type SortByProps = {
  items: Array<Item>;
  onSelect: (item: Item) => void;
};

export const SortBy = ({ items, onSelect }: SortByProps) => {
  const [open, setOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(
    items[0] ? items[0].value : ""
  );

  return (
    <View className="flex-row">
      <RNPickerSelect
        items={items}
        onValueChange={(newValue, index) => {
          setSelectedLabel(newValue);
          onSelect(items[index]);
        }}
      >
        <View className="flex-row align-center justify-center">
          <StyledText className="leading-6 text-gray33 text-base" weight={300}>
            Sort by:
          </StyledText>
          <StyledText className="text-dark-gray mr-2 ml-2" weight={600}>
            {selectedLabel}
          </StyledText>
          <Icon name="arrow-down" />
        </View>
      </RNPickerSelect>
      {/* <DropDownPicker
        open={open}
        setOpen={setOpen}
        items={items}
        setValue={setValue}
        value={value}
        onSelectItem={onSelect}
      /> */}
    </View>
  );
};
