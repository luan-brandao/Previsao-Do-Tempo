import React, { useRef, useEffect } from "react";
import { Animated, View } from "react-native";
import styles from "../styles/globalStyles";

const NUM_GOTAS = 18;

export default function WeatherAnimations({ info, theme, children }) {

  if (!info) {
    return <View style={styles.topSceneEmpty} />;
  }

  const cond = info.weather[0]?.main;

  const cloudAnim = useRef(new Animated.Value(0)).current;
  const rainAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(cloudAnim, {
        toValue: 1,
        duration: 9000,
        useNativeDriver: true,
      })
    ).start();

    Animated.loop(
      Animated.timing(rainAnim, {
        toValue: 1,
        duration: 1400,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const cloudTranslate = cloudAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, 10],
  });

  const rainTranslateY = rainAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, 90],
  });

  const isRain =
    cond === "Rain" || cond === "Drizzle" || cond === "Thunderstorm";
  const isClouds = cond === "Clouds";
  const isClear = cond === "Clear";

  return (
    <View style={styles.topScene}>

      {/* nuvens atrás */}
      <Animated.View
        style={[
          styles.cloudLayerBack,
          { transform: [{ translateX: cloudTranslate }] },
        ]}
      >
        <View style={styles.cloudCircleBig} />
        <View style={styles.cloudCircleMedium} />
        <View style={styles.cloudCircleSmall} />
      </Animated.View>

      {/* nuvens frente */}
      <Animated.View
        style={[
          styles.cloudLayerFront,
          { transform: [{ translateX: Animated.multiply(cloudTranslate, -1) }] },
        ]}
      >
        <View style={styles.cloudCircleMedium} />
        <View style={styles.cloudCircleBig} />
        <View style={styles.cloudCircleSmall} />
      </Animated.View>

      {isClear && (
        <View style={styles.sunWrapper}>
          <Animated.View
            style={[
              styles.sunCore,
              {
                transform: [
                  {
                    scale: cloudAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.9, 1.05],
                    }),
                  },
                ],
              },
            ]}
          />
        </View>
      )}

      {isRain && (
        <View style={styles.rainLayer}>
          {Array.from({ length: NUM_GOTAS }).map((_, index) => (
            <Animated.View
              key={index}
              style={[
                styles.rainDrop,
                {
                  left: (index / NUM_GOTAS) * 100 + "%",
                  transform: [
                    { translateY: rainTranslateY },
                    { rotateZ: "-15deg" },
                  ],
                  opacity: 0.1 + (index % 5) * 0.15,
                },
              ]}
            />
          ))}
        </View>
      )}

      {isClouds && <View style={styles.cloudOverlayDark} />}

      <View style={styles.overlayContent}>{children}</View>
    </View>
  );
}
