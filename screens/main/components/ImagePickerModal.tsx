import React, { memo } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type ImagePickerModalProps = {
  colors: any;
  onClose: () => void;
  onSelectSource: (source: "camera" | "gallery") => void;
  panHandlers?: any;
};

const ImagePickerModal = memo(({ colors, onClose, onSelectSource, panHandlers }: ImagePickerModalProps) => {
  return (
    <View style={[styles.imagePickerContainer, { backgroundColor: colors.background }]}>
      <View {...(panHandlers || {})} style={styles.dragHandleArea}>
        <View style={styles.dragHandleIndicator} />
      </View>
      <View style={[styles.imagePickerHeader, { borderBottomColor: colors.border }]}>
        <View style={styles.headerPlaceholder} />
        <Text style={[styles.imagePickerTitle, { color: colors.text }]}>
          Ganti Foto Profil
        </Text>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={onClose}
        >
          <Ionicons name="close" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.imagePickerContent}>
        <TouchableOpacity
          style={[styles.imageSourceCard, { borderColor: colors.border }]}
          onPress={() => onSelectSource("camera")}
          activeOpacity={0.7}
        >
          <View style={[styles.imageSourceIcon, { backgroundColor: "#FF9500" }]}>
            <Ionicons name="camera-outline" size={24} color="#FFFFFF" />
          </View>
          <Text style={[styles.imageSourceText, { color: colors.text }]}>Ambil Foto</Text>
          <Ionicons name="chevron-forward" size={18} color="#C6C6C8" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.imageSourceCard, { borderColor: colors.border }]}
          onPress={() => onSelectSource("gallery")}
          activeOpacity={0.7}
        >
          <View style={[styles.imageSourceIcon, { backgroundColor: "#007AFF" }]}>
            <Ionicons name="image-outline" size={24} color="#FFFFFF" />
          </View>
          <Text style={[styles.imageSourceText, { color: colors.text }]}>Pilih dari Galeri</Text>
          <Ionicons name="chevron-forward" size={18} color="#C6C6C8" />
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  imagePickerContainer: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
  dragHandleArea: {
    paddingTop: 12,
    alignItems: "center",
    paddingBottom: 8,
  },
  dragHandleIndicator: {
    width: 40,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#C6C6C8",
  },
  imagePickerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
  },
  imagePickerTitle: {
    fontSize: 17,
    fontWeight: "700",
    flex: 1,
    textAlign: "center",
  },
  headerPlaceholder: {
    width: 24,
  },
  closeButton: {
    padding: 4,
  },
  imagePickerContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  imageSourceCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 12,
    borderWidth: 1,
  },
  imageSourceIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  imageSourceText: {
    flex: 1,
    fontSize: 17,
    fontWeight: "600",
  },
});

export default ImagePickerModal;
