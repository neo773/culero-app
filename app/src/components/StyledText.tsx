import { Text, TextProps } from "react-native";
import React from "react";

const textVariantStyle = {
  default: "",
};

export type TextVariant = keyof typeof textVariantStyle;

type StyledTextProps = TextProps & { variant?: keyof typeof textVariantStyle };
export const StyledText = ({
  variant,
  className,
  ...props
}: StyledTextProps) => (
  <Text
    className={`
    ${variant ? textVariantStyle[variant] : textVariantStyle.default}
    ${className}
`}
    {...props}
  ></Text>
);
