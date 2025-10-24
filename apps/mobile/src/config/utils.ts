import { Linking } from "react-native";
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
