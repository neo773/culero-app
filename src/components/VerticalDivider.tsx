import { View, ViewProps } from "react-native";
import { twMerge } from "tailwind-merge";

export const VerticalDivider = ({
  className,
}: {
  className?: ViewProps["className"];
}) => {
  return (
    <View
      className={twMerge("bg-white7/20 rounded-xl mx-2 w-0.5", className)}
    />
  );
};
