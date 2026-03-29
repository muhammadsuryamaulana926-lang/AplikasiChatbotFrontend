import React, { memo } from "react";
import { View, TouchableOpacity, Image, StyleSheet, Dimensions, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type ImageViewerModalProps = {
  imageUrl: string;
  onClose: () => void;
};

const ImageViewerModal = memo(({ imageUrl, onClose }: ImageViewerModalProps) => {
  return (
    <View style={styles.imageViewerOverlay}>
      <TouchableOpacity
        style={styles.imageViewerBackdrop}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.imageViewerHeader}>
          <TouchableOpacity
            style={styles.imageViewerCloseButton}
            onPress={onClose}
          >
            <Ionicons name="close" size={32} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.imageViewerContent}>
          <Image
            source={{ uri: imageUrl }}
            style={styles.imageViewerImage}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  imageViewerOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.95)",
    zIndex: 10000,
  },
  imageViewerBackdrop: {
    flex: 1,
  },
  imageViewerHeader: {
    paddingTop: Platform.OS === "ios" ? 50 : 20,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  imageViewerCloseButton: {
    alignSelf: "flex-end",
  },
  imageViewerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageViewerImage: {
    width: "100%",
    height: "100%",
  },
});

export default ImageViewerModal;
