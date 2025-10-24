import { Linking } from "react-native";

export const onCall = async (phone: string) => {
  const url = `tel:${phone}`;
  try {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.warn("Dialer not supported on this device:", url);
    }
  } catch (err) {
    console.warn("Failed to open dialer:", err);
  }
};
