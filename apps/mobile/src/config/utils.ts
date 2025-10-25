import { Linking, Platform } from "react-native";
import * as Location from "expo-location";
import { IPaymentDuration } from "shared";

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

export const openMapForAddress = async (address: string) => {
  if (!address) {
    console.warn("No address provided to openMapForAddress");
    return;
  }
  // Encode address for URL
  const encodedAddress = encodeURIComponent(address);
  let url = "";

  // Both Android and iOS support the geo: protocol, but the format slightly differs on iOS
  if (Platform.OS === "ios") {
    url = `http://maps.apple.com/?q=${encodedAddress}`;
  } else {
    url = `geo:0,0?q=${encodedAddress}`;
  }

  try {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      // Fallback: Try with Google Maps in browser
      const googleUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
      const googleSupported = await Linking.canOpenURL(googleUrl);
      if (googleSupported) {
        await Linking.openURL(googleUrl);
      } else {
        console.warn(
          "No supported map application found for address:",
          address
        );
      }
    }
  } catch (err) {
    console.warn("Failed to open maps for address:", err);
  }
};

export const getPaymentDurationOptions = (
  date: Date,
  duration: IPaymentDuration
) => {
  const currentQuarter = Math.floor(date.getMonth() / 3) + 1;
  const currentMonth = date.getMonth() + 1;

  const quarterKeyMap: { [key: number]: string } = {
    1: "1st",
    2: "2nd",
    3: "3rd",
    4: "4th",
  };

  const getQuarter = (index: number) =>
    currentQuarter + index === 4 ? 4 : (currentQuarter + index) % 4;

  const getQuarterLabel = (index: number) =>
    `${quarterKeyMap[getQuarter(index)]} Quarter, ${
      date.getFullYear() + Math.floor((currentQuarter - 1 + index) / 4)
    }`;
  const getMonthLabel = (index: number) =>
    `${new Date(0, (currentMonth - 1 + index) % 12).toLocaleString("default", {
      month: "long",
    })}, ${date.getFullYear() + Math.floor((currentMonth - 1 + index) / 12)}`;

  const durationOptions = Array(4)
    .fill(null)
    .map((_, index) => ({
      ...(duration === IPaymentDuration.QUARTER
        ? {
            value: getQuarter(index),
            label: getQuarterLabel(index),
          }
        : {
            value: ((currentMonth - 1 + index) % 12) + 1,
            label: getMonthLabel(index),
          }),
    }));

  return durationOptions;
};

// Convert radius (in km) to delta values
export function getRegionForRadius(
  latitude: number,
  longitude: number,
  radiusInKm: number
) {
  const oneDegreeOfLatitudeInKm = 111.32;
  const oneDegreeOfLongitudeInKm =
    111.32 * Math.cos(latitude * (Math.PI / 180));

  const latitudeDelta = (radiusInKm * 2) / oneDegreeOfLatitudeInKm;
  const longitudeDelta = (radiusInKm * 2) / oneDegreeOfLongitudeInKm;

  return {
    latitude,
    longitude,
    latitudeDelta,
    longitudeDelta,
  };
}

export async function getCoordinatesFromAddress(
  address: string,
  radiusInKm: number
) {
  try {
    const permission = await Location.getForegroundPermissionsAsync();
    if (!permission) return;
    const geocoded = await Location.geocodeAsync(address);
    if (geocoded.length > 0) {
      const { latitude, longitude } = geocoded[0];
      return getRegionForRadius(latitude, longitude, radiusInKm);
    }
    return undefined;
  } catch (error) {
    console.error("Geocoding error:", error);
  }
}
