import React, { useRef } from "react";
import {
  Animated,
  StyleSheet,
  View,
  PanResponder,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../contexts/ThemeContext";

const SWIPE_THRESHOLD = 30;
const MAX_SWIPE = 70;

type SwipeableChatItemProps = {
  children: React.ReactNode;
  isPinned: boolean;
  onPin: () => void;
  onUnpin: () => void;
  disabled?: boolean;
};

export const SwipeableChatItem: React.FC<SwipeableChatItemProps> = ({
  children,
  isPinned,
  onPin,
  onUnpin,
  disabled = false,
}) => {
  const { colors } = useTheme();
  const translateX = useRef(new Animated.Value(0)).current;
  const iconRotate = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => false,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: (_, gestureState) => {
        const isHorizontal = Math.abs(gestureState.dx) > Math.abs(gestureState.dy);
        return !disabled && isHorizontal;
      },
      onPanResponderGrant: () => {
        translateX.setOffset(0);
        translateX.setValue(0);
      },
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx > 0 && gestureState.dx <= MAX_SWIPE) {
          translateX.setValue(gestureState.dx);
          const rotation = (gestureState.dx / SWIPE_THRESHOLD) * 180;
          iconRotate.setValue(rotation);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > SWIPE_THRESHOLD) {
          if (isPinned) {
            onUnpin();
          } else {
            onPin();
          }
        }
        translateX.setValue(0);
        iconRotate.setValue(0);
      },
      onPanResponderTerminate: () => {
        translateX.setValue(0);
        iconRotate.setValue(0);
      },
      onShouldBlockNativeResponder: () => true,
    })
  ).current;

  const backgroundOpacity = translateX.interpolate({
    inputRange: [0, 10, SWIPE_THRESHOLD],
    outputRange: [0, 0.6, 1],
    extrapolate: 'clamp',
  });

  const iconScale = translateX.interpolate({
    inputRange: [0, 5, SWIPE_THRESHOLD / 2, SWIPE_THRESHOLD],
    outputRange: [0, 0.7, 1.2, 1],
    extrapolate: 'clamp',
  });

  const iconTranslateX = translateX.interpolate({
    inputRange: [0, MAX_SWIPE],
    outputRange: [-15, SWIPE_THRESHOLD],
    extrapolate: 'clamp',
  });

  const rotation = iconRotate.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.backgroundGradient}>
        <Animated.View style={{ opacity: backgroundOpacity, flex: 1 }}>
          <LinearGradient
            colors={['#E3F2FD', '#2196F3']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.gradient}
          />
        </Animated.View>
      </View>

      <Animated.View
        style={[
          styles.iconContainer,
          {
            opacity: backgroundOpacity,
            transform: [
              { translateX: iconTranslateX },
              { scale: iconScale },
              { rotate: rotation },
            ],
          },
        ]}
      >
        <MaterialIcons
          name="smart-toy"
          size={28}
          color="#FFFFFF"
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.swipeableContent,
          { transform: [{ translateX }], backgroundColor: colors.background },
        ]}
        {...panResponder.panHandlers}
      >
        {children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    overflow: "hidden",
  },
  backgroundGradient: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 0,
  },
  gradient: {
    flex: 1,
  },
  iconContainer: {
    position: "absolute",
    left: 20,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  swipeableContent: {
    zIndex: 2,
  },
});
