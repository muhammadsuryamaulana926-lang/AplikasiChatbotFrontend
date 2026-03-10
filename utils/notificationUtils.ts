import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export async function registerForPushNotificationsAsync() {
  if (!Device.isDevice) {
    console.log("Must use physical device for Push Notifications");
    return;
  }

  try {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== "granted") {
      console.log("Failed to get push token for push notification!");
      return;
    }

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
  } catch (error) {
    console.log("Notification setup error (OK in Expo Go):", error);
  }
}

export async function scheduleDailyNotification() {
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();

    // Notifikasi Pagi - Jam 09:10
    const morningId = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Selamat Pagi! ☀️",
        body: "Jangan lupa gunakan Asisten Chatbot AI untuk membantu aktivitasmu hari ini!",
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DAILY,
        hour: 9,
        minute: 10,
        repeats: true,
      },
    });

    // Notifikasi Malam - Jam 20:00 (8 malam)
    const nightId = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Selamat Istirahat! 🌙",
        body: "Semangat untuk hari esok! Asisten Chatbot AI siap membantu kamu lagi besok.",
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DAILY,
        hour: 20,
        minute: 0,
        repeats: true,
      },
    });

    console.log("Daily notifications scheduled:");
    console.log("- Morning (09:10 AM), ID:", morningId);
    console.log("- Night (08:00 PM), ID:", nightId);
  } catch (error) {
    console.log("Schedule notification error (OK in Expo Go):", error);
  }
}

export async function cancelAllNotifications() {
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();
    console.log("All notifications cancelled");
  } catch (error) {
    console.log("Cancel notification error:", error);
  }
}
