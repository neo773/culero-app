import { useWindowDimensions } from "react-native";

export const useScreenInfo = () => {
  const { width } = useWindowDimensions();
  return {
    isPhone: width < 768,
  };
};
