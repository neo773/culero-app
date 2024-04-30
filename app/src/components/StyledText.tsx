import { Text, TextProps } from "react-native";
import { tv, type VariantProps } from "tailwind-variants";

import React from "react";

const text = tv({
  variants: {
    weight: {
      100: "font-inter-thin",
      200: "font-inter-extra-light",
      300: "font-inter-light",
      400: "font-inter-regular",
      500: "font-inter-medium",
      600: "font-inter-semibold",
      700: "font-inter-bold",
      800: "font-inter-extra-bold",
      900: "font-inter-black",
    },
    color: {
      black: "text-black",
      white: "text-white",
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
}: StyledTextProps) => (
  <Text className={text({ weight, color, className })} {...props} />
);
