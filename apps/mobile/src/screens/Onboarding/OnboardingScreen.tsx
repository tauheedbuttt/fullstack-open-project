import { View, Text } from "react-native";
import tw from "../../lib/tailwind";
import Button from "../../components/Button";
import { useState } from "react";
import { CardIcon, GraphIcon, OwnersIcon } from "../../../assets";
import { useNavigate } from "react-router-native";
import { routes } from "../../config/routeConfig";

const OnboardingScreen = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const steps = [
    {
      title: "Pay & Manage Fees Easily",
      subtitle:
        "Track and pay your community fees with just a few taps. Simple, secure, and hassle-free.",
      icon: CardIcon,
    },
    {
      title: "Track Payments and Reports",
      subtitle:
        "Get instant access to payment history, receipts, and detailed financial reports.",
      icon: GraphIcon,
    },
    {
      title: "Stay Connected",
      subtitle:
        "Connect with your community and fee collectors. Transparent and efficient communication.",
      icon: OwnersIcon,
    },
  ];
  const currentStep = steps[step];

  const handleNext = () => setStep(step + 1);
  const handlePrevious = () => setStep(step - 1);
  const handleSkip = () => navigate(routes.auth.login);

  const isFinished = step === steps.length - 1;
  const buttonData = {
    true: { text: "Get Started", action: handleSkip },
    false: { text: "Next →", action: handleNext },
  };

  return (
    <View style={tw`flex-1 justify-center  bg-white p-12 flex-col gap-5`}>
      {/* Skip Button */}
      <View style={tw`absolute top-20 right-12`}>
        <Button text="Skip" variant="text" onPress={handleSkip} />
      </View>
      {/* Step Details */}
      <View style={tw`flex-col gap-15 items-center`}>
        {/* Icon */}
        <View
          style={tw`h-28 w-28 items-center justify-center rounded-xl bg-primary/10`}
        >
          {
            <currentStep.icon
              style={tw`text-xl text-theme`}
              height={40}
              width={40}
            />
          }
        </View>
        {/* Title Subtitle */}
        <View style={tw`flex-col justify-center items-center gap-2`}>
          <Text style={tw`text-xl font-bold text-primary text-center`}>
            {currentStep.title}
          </Text>
          <Text style={tw`text-lg font-light text-secondary text-center`}>
            {currentStep.subtitle}
          </Text>
        </View>
      </View>

      {/* Stepper */}
      <View style={tw`flex-row justify-center items-center my-7`}>
        {steps.map((_, index) => (
          <View
            key={index}
            style={tw.style(
              "h-2 w-2 rounded-full mx-1",
              index === step ? "bg-primary w-10" : "bg-gray-300"
            )}
          />
        ))}
      </View>

      {/* Actions */}
      <View style={tw`flex flex-row gap-2`}>
        {step > 0 && (
          <Button
            text="←"
            onPress={handlePrevious}
            style={tw`py-3`}
            textStyle={tw`font-medium`}
            variant="secondary"
          />
        )}
        <Button
          text={buttonData[`${isFinished}`].text}
          onPress={buttonData[`${isFinished}`].action}
          style={tw`py-3 flex-1`}
          textStyle={tw`font-medium`}
        />
      </View>
    </View>
  );
};

export default OnboardingScreen;
