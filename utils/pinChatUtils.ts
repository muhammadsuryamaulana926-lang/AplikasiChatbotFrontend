import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { API_CONFIG } from "../config/api-config";

export const MAX_PINNED_CHATS = 3;

export const loadPinnedChats = async (): Promise<string[]> => {
  try {
    const saved = await AsyncStorage.getItem("pinnedChats");
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Error loading pinned chats:", error);
    return [];
  }
};

export const savePinnedChats = async (pinnedIds: string[]): Promise<void> => {
  try {
    await AsyncStorage.setItem("pinnedChats", JSON.stringify(pinnedIds));
  } catch (error) {
    console.error("Error saving pinned chats:", error);
  }
};

export const togglePinChat = async (
  chatId: string,
  pinnedChatIds: string[],
  onSuccess: (newPinnedIds: string[]) => void,
): Promise<void> => {
  const isPinned = pinnedChatIds.includes(chatId);

  if (isPinned) {
    const newPinnedIds = pinnedChatIds.filter((id) => id !== chatId);

    // Update UI instantly
    onSuccess(newPinnedIds);

    // Background tasks
    savePinnedChats(newPinnedIds);
    fetch(`${API_CONFIG.BACKEND_URL}/api/chat/pin`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
      body: JSON.stringify({ chatId, isPinned: false }),
    }).catch((error) => console.error("Error updating pin status:", error));
  } else {
    if (pinnedChatIds.length >= MAX_PINNED_CHATS) {
      Alert.alert(
        "Batas Maksimal",
        `Anda hanya bisa menyematkan maksimal ${MAX_PINNED_CHATS} chat. Lepas sematan chat lain terlebih dahulu.`,
        [{ text: "OK" }],
      );
      return;
    }

    const newPinnedIds = [...pinnedChatIds, chatId];

    // Update UI instantly
    onSuccess(newPinnedIds);

    // Background tasks
    savePinnedChats(newPinnedIds);
    fetch(`${API_CONFIG.BACKEND_URL}/api/chat/pin`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
      body: JSON.stringify({ chatId, isPinned: true }),
    }).catch((error) => console.error("Error updating pin status:", error));
  }
};

export const sortChatHistory = <T extends { id: string; timestamp: Date }>(
  history: T[],
  pinnedIds: string[],
): T[] => {
  return history.sort((a, b) => {
    const aIsPinned = pinnedIds.includes(a.id);
    const bIsPinned = pinnedIds.includes(b.id);

    if (aIsPinned && !bIsPinned) return -1;
    if (!aIsPinned && bIsPinned) return 1;

    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });
};
