import { View, ViewProps } from "react-native";
import { twMerge } from "tailwind-merge";

export const HorizontalDivider = ({
  className,
}: {
  className?: ViewProps["className"];
}) => {
  return (
    <View className={twMerge("border-black/20  border-b w-full", className)} />
  );
};
