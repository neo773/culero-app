import { Pressable, PressableProps, TextProps } from "react-native";
import React, { Children } from "react";
import { StyledText, StyledTextProps, type TextVariant } from "./StyledText";
import { VariantProps, tv } from "tailwind-variants";
import { Icon, IconProps } from "../icons";

const button = tv({
  base: "rounded-md p-2 px-6 flex items-center justify-center flex-row",
  variants: {
    color: {
      light: "bg-cyan",
      white: "bg-white",
      dark: "bg-blue weight-900",
    },
    // full width button
    fw: {
      true: "w-full",
    },
    rounded: {
      true: "rounded-3xl",
    },
  },
  defaultVariants: { color: "light" },
});

type ButtonVariants = VariantProps<typeof button>;

type StyledPressableProps = PressableProps &
  ButtonVariants & {
    textVariant?: TextVariant;
    textClassName?: TextProps["className"];
    rightIconProps?: IconProps;
    children?: React.ReactNode;
    // variant?: keyof typeof buttonVariantStyle;
  };
export const StyledPressable = ({
  color,
  fw,
  rounded,
  className,
  textVariant,
  textClassName,
  rightIconProps,
  children,
  ...props
}: StyledPressableProps) => (
  <Pressable className={button({ color, fw, rounded, className })} {...props}>
    <StyledText weight={500} {...textVariant} className={textClassName}>
      {children}
    </StyledText>
    {rightIconProps && <Icon {...rightIconProps} />}
  </Pressable>
);
