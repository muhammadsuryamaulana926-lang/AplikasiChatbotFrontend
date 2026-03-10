import { Audio } from "expo-av";
import { Vibration, Platform } from "react-native";

let sound: Audio.Sound | null = null;
let isAudioConfigured = false;

// Durasi animasi yang disinkronkan dengan suara (dalam ms)
export const MODAL_ANIMATION_DURATION = 300;

// Configure audio mode for iOS
const configureAudio = async () => {
  if (isAudioConfigured) return;
  
  try {
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: false,
      shouldDuckAndroid: true,
    });
    isAudioConfigured = true;
  } catch (error) {
    console.log("Error configuring audio:", error);
  }
};

export const playModalSound = async () => {
  try {
    await configureAudio();
    
    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Audio.Sound.createAsync(
      require("../assets/images/sound/WhatsApp Audio 2026-02-25 at 06.02.42.mpeg.mp3"),
      { shouldPlay: true, volume: 0.5 },
    );

    sound = newSound;

    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.didJustFinish) {
        sound?.unloadAsync();
      }
    });
  } catch (error) {
    console.log("Error playing sound:", error);
  }
};

export const playModalSoundWithVibration = async () => {
  try {
    await configureAudio();
    
    // Try to play sound
    try {
      if (sound) {
        await sound.unloadAsync();
      }

      const { sound: newSound } = await Audio.Sound.createAsync(
        require("../assets/images/sound/WhatsApp Audio 2026-02-25 at 06.02.42.mpeg.mp3"),
        { shouldPlay: true, volume: 0.5 },
      );

      sound = newSound;

      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.didJustFinish) {
          sound?.unloadAsync();
        }
      });
    } catch (audioError) {
      console.log("Audio not supported, using vibration only");
    }

    // Vibrate
    if (Platform.OS === 'ios') {
      Vibration.vibrate();
    } else {
      Vibration.vibrate([0, 100, 50, 100]);
    }
  } catch (error) {
    console.log("Error in playModalSoundWithVibration:", error);
  }
};

export const playImagePickerSound = async () => {
  try {
    await configureAudio();
    
    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Audio.Sound.createAsync(
      require("../assets/images/sound/Notifikasi WA Korea Lucu 6.mp3"),
      { shouldPlay: true, volume: 0.5 },
    );

    sound = newSound;

    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.didJustFinish) {
        sound?.unloadAsync();
      }
    });
  } catch (error) {
    console.log("Error playing sound:", error);
  }
};