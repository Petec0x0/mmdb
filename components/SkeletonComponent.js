import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Easing,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);

const SkeletonComponent = ({ children, styles, width, height }) => {
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear.inOut,
        useNativeDriver: true,
      }),
    ).start();
  });

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, width],
  });

  return (
    <View
      style={{
        backgroundColor: "#101010",
        borderColor: "#161616",
        height: height,
        width: width,
      }}
    >
      <AnimatedLG
        colors={["#101010", "#161616", "#161616", "#101010"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          ...StyleSheet.absoluteFill,
          transform: [{ translateX: translateX }],
        }}
      />
      {children}
    </View>
  );
};
export default SkeletonComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});