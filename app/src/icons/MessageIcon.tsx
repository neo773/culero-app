import * as React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";

export const MessageIcon = (props: SvgProps) => {
  return (
    <Svg
      width={43}
      height={43}
      viewBox="0 0 43 43"
      fill="none"
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={21.5} cy={21.5} r={21.5} fill="#F1F1F1" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.545 18.364a.91.91 0 01.909-.91h10.91a.91.91 0 110 1.819h-10.91a.91.91 0 01-.91-.91zM15.545 22a.91.91 0 01.909-.91h8.182a.91.91 0 110 1.819h-8.182a.91.91 0 01-.91-.91z"
        fill="#383838"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 16.546A4.556 4.556 0 0115.546 12h12.727a4.556 4.556 0 014.545 4.546v7.272a4.556 4.556 0 01-4.545 4.546h-9.455c-.66 0-1.34.262-1.902.824l-2.182 2.182c-.212.211-.453.38-.737.49-.28.108-.557.14-.815.14A2.151 2.151 0 0111 29.818V16.545zm4.546-2.728a2.738 2.738 0 00-2.728 2.728v13.272c0 .225.139.364.364.364a.463.463 0 00.162-.02.308.308 0 00.104-.078l2.182-2.181c.892-.893 2.03-1.357 3.188-1.357h9.455A2.738 2.738 0 0031 23.817v-7.273a2.738 2.738 0 00-2.727-2.727H15.546z"
        fill="#383838"
      />
    </Svg>
  );
};
