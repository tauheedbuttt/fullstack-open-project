import { cn } from "../../utils/utils";
import Button from "../Button";

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
    <div className="flex items-center justify-between gap-2">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const disabled = currentStep < stepNumber;
        const isCompleted = currentStep >= stepNumber;
        const isProgressComplete = currentStep > stepNumber;
        return (
          <>
            <div key={index}>
              <h2>{step.label}</h2>
              <Button
                text={`${stepNumber}`}
                disabled={disabled}
                onClick={() => setStep(stepNumber)}
                className={cn(
                  `!rounded-full`,
                  !isCompleted &&
                    "bg-gray-200 !text-secondary !hover:text-white"
                )}
                variant="primary"
              />
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "separator w-full border-2",
                  isProgressComplete && "!border-primary"
                )}
              />
            )}
          </>
        );
      })}
    </div>
  );
};

export default Stepper;
