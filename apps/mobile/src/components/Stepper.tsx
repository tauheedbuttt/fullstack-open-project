import { Text, View } from "react-native";
import tw from "../lib/tailwind";
import Button from "./Button";
import { Fragment } from "react/jsx-runtime";

interface StepperProps {
  steps: {
    label?: string;
    description?: string;
  }[];
  currentStep: number;
  setStep: (step: number) => void;
}

const Stepper = ({ steps, currentStep, setStep }: StepperProps) => {
  return (
    <View style={tw`flex-row items-center justify-between gap-2`}>
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const disabled = currentStep < stepNumber;
        const isCompleted = currentStep >= stepNumber;
        const isProgressComplete = currentStep > stepNumber;
        return (
          <Fragment key={index}>
            <View key={index}>
              {step.label && <Text>{step.label}</Text>}
              <Button
                text={`${stepNumber}`}
                disabled={disabled}
                onPress={() => setStep(stepNumber)}
                style={tw.style(
                  `rounded-full h-10 w-10 p-0 flex items-center justify-center`,
                  !isCompleted &&
                    "!bg-gray-200 !text-secondary !hover:text-white"
                )}
                variant="primary"
              />
            </View>
            {index < steps.length - 1 && (
              <View
                style={tw.style(
                  "flex-1 border-2 border-secondary/10",
                  isProgressComplete && "border-primary"
                )}
              />
            )}
          </Fragment>
        );
      })}
    </View>
  );
};

export default Stepper;
