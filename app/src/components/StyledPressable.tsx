import { Pressable, PressableProps, TextProps } from "react-native";
import React, { Children } from "react";
import { StyledText, type TextVariant } from "./StyledText";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "rounded-md p-2 ",
  variants: {
    color: { light: "bg-cyan", white: "bg-white", dark: "bg-blue" },
  },
  defaultVariants: { color: "light" },
});

type ButtonVariants = VariantProps<typeof button>;

type StyledPressableProps = PressableProps &
  ButtonVariants & {
    // textVariant?: TextVariant;
    // textClassName?: TextProps["className"];
    children?: React.ReactNode;
    // variant?: keyof typeof buttonVariantStyle;
  };
export const StyledPressable = ({
  color,
  children,
  ...props
}: StyledPressableProps) => (
  <Pressable className={button({ color })} {...props}>
    <StyledText>{children}</StyledText>
  </Pressable>
);
