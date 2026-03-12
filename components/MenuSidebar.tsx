import React from "react";
import {
  Animated,
  Dimensions,
  Easing,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { formatRelativeTime } from "../utils/timeUtils";
import { togglePinChat, sortChatHistory } from "../utils/pinChatUtils";
import { SwipeableChatItem } from "./SwipeableChatItem";

const { width } = Dimensions.get("window");

interface MessageType {
  id: string;
  text: string;
  sender: "user" | "bot" | "system";
  timestamp: Date;
  isConfirmation?: boolean;
  originalQuestion?: string;
  options?: Array<{text: string, action: string}>;
}

interface ChatHistoryType {
  id: string;
  title: string;
  preview: string;
  timestamp: Date;
  unread?: boolean;
  isPinned?: boolean;
  messages: MessageType[];
}

interface MenuSidebarProps {
  showMenu: boolean;
  setShowMenu: (show: boolean) => void;
  colors: any;
  slideAnim: Animated.Value;
  editingChatId: string | null;
  setEditingChatId: (id: string | null) => void;
  editInputRef: React.RefObject<TextInput | null>;
  editingTextRef: React.MutableRefObject<string>;
  originalTitleRef: React.MutableRefObject<string>;
  startNewChat: () => void;
  pinnedChatIds: string[];
  setPinnedChatIds: (ids: string[]) => void;
  chatHistory: ChatHistoryType[];
  setChatHistory: React.Dispatch<React.SetStateAction<ChatHistoryType[]>>;
  currentChatId: string | null;
  loadHistory: (history: ChatHistoryType) => void;
  loadChatHistory: (preserveScroll?: boolean) => void;
  historyScrollRef: React.RefObject<ScrollView | null>;
  scrollPositionRef: React.MutableRefObject<number>;
  isScrollingRef: React.MutableRefObject<boolean>;
  scrollRestoreTimeoutRef: React.MutableRefObject<NodeJS.Timeout | null>;
  lastScrollTimeRef: React.MutableRefObject<number>;
  setDeleteItemId: (id: string | null) => void;
  setShowDeleteModal: (show: boolean) => void;
  setIsEditing: (editing: boolean) => void;
  setCurrentChatTitle: (title: string) => void;
  API_CONFIG: any;
}

// Separate component for History Item to prevent re-rendering all items
const HistoryItem = React.memo(({ 
  item, 
  colors, 
  currentChatId, 
  editingChatId, 
  pinnedChatIds, 
  setPinnedChatIds, 
  setChatHistory, 
  loadHistory, 
  setDeleteItemId, 
  setShowDeleteModal, 
  editInputRef, 
  editingTextRef, 
  originalTitleRef, 
  setEditingChatId, 
  setIsEditing, 
  setCurrentChatTitle,
  API_CONFIG 
}: any) => {
  const isCurrentlyEditing = editingChatId === item.id;
  const isPinned = pinnedChatIds.includes(item.id);
  
  return (
    <SwipeableChatItem
      isPinned={isPinned}
      onPin={() => {
        togglePinChat(item.id, pinnedChatIds, (newPinnedIds) => {
          setPinnedChatIds(newPinnedIds);
          setChatHistory((prev: any) => sortChatHistory([...prev], newPinnedIds));
        });
      }}
      onUnpin={() => {
        togglePinChat(item.id, pinnedChatIds, (newPinnedIds) => {
          setPinnedChatIds(newPinnedIds);
          setChatHistory((prev: any) => sortChatHistory([...prev], newPinnedIds));
        });
      }}
      disabled={isCurrentlyEditing}
    >
      <TouchableOpacity
        style={[
          styles.historyItem,
          { backgroundColor: colors.background },
          currentChatId === item.id && [styles.historyItemActive, { backgroundColor: colors.botBubble }],
          isPinned && [styles.historyItemPinned, { backgroundColor: colors.pinnedBackground }],
        ]}
        onPress={() => (!isCurrentlyEditing ? loadHistory(item) : null)}
        onLongPress={() => {
          setDeleteItemId(item.id);
          setShowDeleteModal(true);
        }}
        activeOpacity={isCurrentlyEditing ? 1 : 0.7}
      >
        <View style={[styles.historyIcon, { backgroundColor: isPinned ? colors.pinnedBackground : colors.cardBackground }]}>
          <Ionicons
            name={isPinned ? "pin" : "chatbubble"}
            size={20}
            color={isPinned ? colors.pinnedIconColor : (item.unread ? colors.primary : colors.textSecondary)}
          />
        </View>
        <View style={styles.historyContent}>
          <View style={styles.historyHeader}>
            {isCurrentlyEditing ? (
              <TextInput
                ref={editInputRef}
                style={[styles.editingInput, { color: colors.text, borderBottomColor: colors.primary }]}
                defaultValue={item.title}
                onChangeText={(text) => {
                  editingTextRef.current = text;
                }}
                onEndEditing={async () => {
                  const finalText = editingTextRef.current.trim();
                  const originalText = originalTitleRef.current;
                  const textToSave = finalText === "" ? originalText : finalText;
                  if (textToSave !== originalText) {
                    try {
                      const response = await fetch(
                        `${API_CONFIG.BACKEND_URL}/api/chat/update-title`,
                        {
                          method: "PUT",
                          headers: {
                            "Content-Type": "application/json",
                            "ngrok-skip-browser-warning": "true",
                          },
                          body: JSON.stringify({
                            chatId: item.id,
                            newTitle: textToSave,
                          }),
                        },
                      );
                      const data = await response.json();
                      if (data.success) {
                        if (currentChatId === item.id) {
                          setCurrentChatTitle(textToSave);
                        }
                        setChatHistory((prev: any) =>
                          prev.map((chat: any) =>
                            chat.id === item.id
                              ? { ...chat, title: textToSave }
                              : chat,
                          ),
                        );
                      }
                    } catch (error) {
                      console.error("Error updating title:", error);
                    }
                  }
                  setEditingChatId(null);
                  setIsEditing(false);
                  editingTextRef.current = "";
                  originalTitleRef.current = "";
                }}
                autoFocus={false}
                returnKeyType="done"
                multiline={false}
              />
            ) : (
              <Text
                style={[
                  styles.historyItemTitle,
                  item.unread && styles.historyTitleUnread,
                  isPinned && styles.historyTitlePinned,
                  { color: colors.text }
                ]}
                numberOfLines={1}
              >
                {item.title}
              </Text>
            )}
          </View>
        </View>
        <View style={styles.historyRightSection}>
          <Text style={[styles.historyTime, { color: colors.textSecondary }]}>
            {formatRelativeTime(item.timestamp)}
          </Text>
        </View>
      </TouchableOpacity>
    </SwipeableChatItem>
  );
});

export const MenuSidebar: React.FC<MenuSidebarProps> = ({
  showMenu,
  setShowMenu,
  colors,
  slideAnim,
  editingChatId,
  setEditingChatId,
  editInputRef,
  editingTextRef,
  originalTitleRef,
  startNewChat,
  pinnedChatIds,
  setPinnedChatIds,
  chatHistory,
  setChatHistory,
  currentChatId,
  loadHistory,
  loadChatHistory,
  historyScrollRef,
  scrollPositionRef,
  isScrollingRef,
  scrollRestoreTimeoutRef,
  lastScrollTimeRef,
  setDeleteItemId,
  setShowDeleteModal,
  setIsEditing,
  setCurrentChatTitle,
  API_CONFIG,
}) => {
  return (
    <Animated.View
      style={[
        styles.menuContainer,
        {
          transform: [{ translateX: slideAnim }],
          backgroundColor: colors.background,
          borderRightColor: colors.border,
        },
      ]}
    >
      <View style={[styles.menuHeader, { borderBottomColor: colors.border }]}>
        <View style={styles.menuLogo}>
          <LinearGradient
            colors={["#007AFF", "#5856D6"]}
            style={styles.logoGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <MaterialIcons name="smart-toy" size={20} color="#FFFFFF" />
          </LinearGradient>
          <View style={styles.menuTitleContainer}>
            <Text style={[styles.menuAppName, { color: colors.text }]}>
              Asisten Chatbot AI
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.closeMenuButton}
          onPress={() => {
            if (editingChatId) {
              editInputRef.current?.blur();
            }
            setShowMenu(false);
          }}
        >
          <Ionicons name="close" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
      <View style={styles.menuContent}>
        <TouchableOpacity
          style={[styles.newChatButton, { backgroundColor: colors.primary }]}
          onPress={startNewChat}
        >
          <View style={styles.newChatIcon}>
            <Ionicons name="add" size={24} color="#FFFFFF" />
          </View>
          <Text style={styles.newChatText}>Percakapan Baru</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 16 }}>
          <Text style={[styles.historyHeaderTitle, { color: colors.text }]}>
            Riwayat
          </Text>
        </View>

        {pinnedChatIds.length > 0 && (
          <View style={[styles.pinnedSection, { backgroundColor: colors.background }]}>
            <View style={[styles.stickyHeaderContainer, { backgroundColor: colors.background, borderBottomColor: colors.border }]}>
              <Text style={[styles.sectionHeaderText, { color: colors.textSecondary, marginLeft: 10, marginTop: 0, marginBottom: 0 }]}>
                Disematkan
              </Text>
            </View>
            <ScrollView 
              style={{ maxHeight: 200 }}
              contentContainerStyle={{ paddingTop: 8 }}
              showsVerticalScrollIndicator={false}
              nestedScrollEnabled={true}
            >
              {chatHistory
                .filter(item => pinnedChatIds.includes(item.id))
                .map((item) => (
                  <View key={`pinned-${item.id}`}>
                    <HistoryItem 
                      item={item}
                      colors={colors}
                      currentChatId={currentChatId}
                      editingChatId={editingChatId}
                      pinnedChatIds={pinnedChatIds}
                      setPinnedChatIds={setPinnedChatIds}
                      setChatHistory={setChatHistory}
                      loadHistory={loadHistory}
                      setDeleteItemId={setDeleteItemId}
                      setShowDeleteModal={setShowDeleteModal}
                      editInputRef={editInputRef}
                      editingTextRef={editingTextRef}
                      originalTitleRef={originalTitleRef}
                      setEditingChatId={setEditingChatId}
                      setIsEditing={setIsEditing}
                      setCurrentChatTitle={setCurrentChatTitle}
                      API_CONFIG={API_CONFIG}
                    />
                  </View>
                ))}
            </ScrollView>
          </View>
        )}
        
        <ScrollView
          ref={historyScrollRef}
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 12, paddingTop: 8 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
          removeClippedSubviews={false}
          onTouchStart={() => {
            isScrollingRef.current = true;
            lastScrollTimeRef.current = Date.now();
            if (scrollRestoreTimeoutRef.current) {
              clearTimeout(scrollRestoreTimeoutRef.current);
              scrollRestoreTimeoutRef.current = null;
            }
          }}
          onTouchEnd={() => {
            lastScrollTimeRef.current = Date.now();
            setTimeout(() => {
              isScrollingRef.current = false;
            }, 1000);
          }}
          onScrollBeginDrag={() => {
            isScrollingRef.current = true;
            lastScrollTimeRef.current = Date.now();
            if (scrollRestoreTimeoutRef.current) {
              clearTimeout(scrollRestoreTimeoutRef.current);
              scrollRestoreTimeoutRef.current = null;
            }
          }}
          onScrollEndDrag={() => {
            lastScrollTimeRef.current = Date.now();
            setTimeout(() => {
              isScrollingRef.current = false;
            }, 1000);
          }}
          onMomentumScrollBegin={() => {
            isScrollingRef.current = true;
            lastScrollTimeRef.current = Date.now();
          }}
          onMomentumScrollEnd={() => {
            lastScrollTimeRef.current = Date.now();
            setTimeout(() => {
              isScrollingRef.current = false;
            }, 1000);
          }}
          onScroll={(e) => {
            scrollPositionRef.current = e.nativeEvent.contentOffset.y;
            lastScrollTimeRef.current = Date.now();
          }}
          scrollEventThrottle={16}
        >
          {chatHistory.length === 0 ? (
            <View style={styles.emptyHistoryContainer}>
              <Ionicons name="chatbubbles-outline" size={48} color={colors.textSecondary} />
              <Text style={[styles.emptyHistoryText, { color: colors.textSecondary }]}>
                Belum ada riwayat percakapan
              </Text>
              <TouchableOpacity 
                style={[styles.refreshHistoryButton, { backgroundColor: colors.primary }]}
                onPress={() => loadChatHistory()}
              >
                <Text style={styles.refreshHistoryText}>Refresh</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
              {chatHistory.filter(item => !pinnedChatIds.includes(item.id)).length > 0 && (
                <>
                  {chatHistory
                    .filter(item => !pinnedChatIds.includes(item.id))
                    .map((item) => (
                      <View key={`history-${item.id}`}>
                        <HistoryItem 
                          item={item}
                          colors={colors}
                          currentChatId={currentChatId}
                          editingChatId={editingChatId}
                          pinnedChatIds={pinnedChatIds}
                          setPinnedChatIds={setPinnedChatIds}
                          setChatHistory={setChatHistory}
                          loadHistory={loadHistory}
                          setDeleteItemId={setDeleteItemId}
                          setShowDeleteModal={setShowDeleteModal}
                          editInputRef={editInputRef}
                          editingTextRef={editingTextRef}
                          originalTitleRef={originalTitleRef}
                          setEditingChatId={setEditingChatId}
                          setIsEditing={setIsEditing}
                          setCurrentChatTitle={setCurrentChatTitle}
                          API_CONFIG={API_CONFIG}
                        />
                      </View>
                    ))}
                </>
              )}
            </>
          )}
        </ScrollView>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: width * 0.73,
    backgroundColor: "#FFFFFF",
    zIndex: 999,
    elevation: 999,
    borderRightWidth: 1,
    borderRightColor: "#F2F2F7",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    overflow: "visible",
  },
  menuHeader: {
    paddingTop: Platform.OS === "android" ? 16 : 6,
    paddingBottom: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F7",
  },
  menuLogo: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoGradient: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  menuTitleContainer: {
    flexDirection: "column",
  },
  menuAppName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000000",
  },
  closeMenuButton: {
    padding: 4,
  },
  menuContent: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 20,
    overflow: "visible",
    zIndex: 1,
  },
  newChatButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007AFF",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 8,
  },
  newChatIcon: {
    marginRight: 12,
  },
  newChatText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  historyHeaderTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1c1c1c",
    marginBottom: 0,
    marginTop: 4,
    letterSpacing: 1,
  },
  pinnedSection: {
    backgroundColor: "#FFFFFF",
    paddingBottom: 8,
  },
  stickyHeaderContainer: {
    paddingVertical: 8,
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F7",
    backgroundColor: "#FFFFFF",
  },
  sectionHeaderText: {
    fontSize: 12,
    fontWeight: "600",
  },
  historyItem: {
    flexDirection: "row",
    paddingVertical: 8,
    borderColor: "transparent",
    zIndex: 1,
    padding: 7,
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 4,
  },
  historyItemActive: {
    backgroundColor: "#eeeeee",
    borderColor: "transparent",
    borderWidth: 2,
    borderRadius: 10,
    padding: 7,
  },
  historyItemPinned: {},
  historyIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#F2F2F7",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  historyContent: {
    flex: 1,
  },
  historyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
    paddingRight: 8,
  },
  editingInput: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000000",
    flex: 1,
    marginRight: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#007AFF",
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  historyItemTitle: {
    paddingTop: 4,
    fontSize: 14,
    fontWeight: "500",
    color: "#000000",
    alignItems: "center",
  },
  historyTitleUnread: {
    fontWeight: "700",
  },
  historyTitlePinned: {},
  historyRightSection: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  historyTime: {
    fontSize: 10,
    color: "#8E8E93",
  },
  emptyHistoryContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  emptyHistoryText: {
    marginTop: 12,
    fontSize: 14,
    textAlign: "center",
  },
  refreshHistoryButton: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  refreshHistoryText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});
