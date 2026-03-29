import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MessageTextWithLinks } from "./MessageTextWithLinks";

interface MessageType {
  id: string;
  text: string;
  sender: "user" | "bot" | "system";
  timestamp: Date;
  isConfirmation?: boolean;
  originalQuestion?: string;
  options?: Array<{text: string, action: string}>;
}

interface ChatMessageProps {
  item: MessageType;
  colors: any;
  copyToClipboard: (text: string) => void;
  handleConfirmation: (question: string, action: string) => void;
}

export const ChatMessage = React.memo(({
  item,
  colors,
  copyToClipboard,
  handleConfirmation,
}: ChatMessageProps) => {
  if (item.sender === "system") {
    return (
      <View style={styles.systemMessageContainer}>
        <Text style={styles.systemMessageText}>{item.text}</Text>
      </View>
    );
  }

  return (
    <View style={styles.messageRowContainer}>
      <View
        style={[
          styles.messageRow,
          item.sender === "user" ? styles.userRow : styles.botRow,
        ]}
      >
        <TouchableOpacity
          onLongPress={() => copyToClipboard(item.text)}
          activeOpacity={0.7}
          style={[
            styles.messageBubble,
            item.sender === "user" 
              ? { backgroundColor: colors.userBubble, borderTopRightRadius: 4 } 
              : { backgroundColor: colors.botBubble, borderTopLeftRadius: 4 },
          ]}
        >
          <MessageTextWithLinks
            text={item.text}
            style={[
              styles.messageText,
              item.sender === "user" ? { color: colors.userText } : { color: colors.botText },
            ]}
            onCopy={(text) => copyToClipboard(text)}
          />

          {/* Confirmation buttons */}
          {item.isConfirmation && item.options && (
            <View style={styles.confirmationButtons}>
              {item.options.map((option, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={[
                    styles.confirmationButton,
                    option.action === 'confirm' ? styles.confirmButton : styles.cancelButton
                  ]}
                  onPress={() => handleConfirmation(item.originalQuestion || '', option.action)}
                >
                  <Text style={[
                    styles.confirmationButtonText,
                    option.action === 'confirm' ? styles.confirmButtonText : styles.cancelButtonText
                  ]}>
                    {option.text}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <Text
            style={[
              styles.timeText,
              item.sender === "user"
                ? styles.userTimeText
                : styles.botTimeText,
            ]}
          >
            {item.timestamp.getHours().toString().padStart(2, "0")}:
            {item.timestamp.getMinutes().toString().padStart(2, "0")}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  messageRowContainer: {
    paddingHorizontal: 8,
    marginVertical: 4,
  },
  systemMessageContainer: {
    alignItems: "center",
    marginVertical: 12,
    paddingHorizontal: 20,
  },
  systemMessageText: {
    fontSize: 12,
    color: "#8E8E93",
    textAlign: "center",
    fontStyle: "italic",
  },
  messageRow: {
    flexDirection: "row",
    marginVertical: 2,
  },
  userRow: {
    justifyContent: "flex-end",
  },
  botRow: {
    justifyContent: "flex-start",
  },
  messageBubble: {
    maxWidth: "92%",
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  timeText: {
    fontSize: 10,
    marginTop: 4,
    alignSelf: "flex-end",
  },
  userTimeText: {
    color: "rgba(255, 255, 255, 0.7)",
  },
  botTimeText: {
    color: "#8E8E93",
  },
  confirmationButtons: {
    flexDirection: 'row',
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.05)',
    paddingTop: 8,
    gap: 8,
  },
  confirmationButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmButton: {
    backgroundColor: '#007AFF',
  },
  cancelButton: {
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  confirmationButtonText: {
    fontSize: 13,
    fontWeight: '600',
  },
  confirmButtonText: {
    color: '#FFFFFF',
  },
  cancelButtonText: {
    color: '#3A3A3C',
  },
});
