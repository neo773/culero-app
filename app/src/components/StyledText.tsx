import { Text, TextProps } from "react-native";
import { tv, type VariantProps } from "tailwind-variants";

import React from "react";
import { twMerge } from "tailwind-merge";

const text = tv({
  base: "text-base",
  variants: {
    weight: {
      100: "font-inter-thin",
      200: "font-inter-extra-light",
      300: "font-inter-light",
      400: "font-inter-regular",
      500: "font-inter-medium",
      600: "font-inter-semi-bold",
      700: "font-inter-bold",
      800: "font-inter-extra-bold",
      900: "font-inter-black",
    },
    color: {
      darkgrey: "text-dark-grey",
      black: "text-black",
      white: "text-white",
      gray35: "text-gray35",
      nickel: "text-nickel-gray",
      gray83: "text-gray83",
      gray33: "text-gray33",
    },
  },
  defaultVariants: {
    weight: 400,
  },
});

export type TextVariant = VariantProps<typeof text>;

export type StyledTextProps = TextProps & TextVariant;
export const StyledText = ({
  weight,
  color,
  className,
  ...props
}: StyledTextProps) => {
  return (
    <Text className={twMerge(text({ weight, color }), className)} {...props} />
  );
};
