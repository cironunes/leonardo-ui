import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Box,
} from '@chakra-ui/react';

export type WelcomeStep = {
  title: string;
  description: string;
};

export type WelcomeStepperProps = {
  activeStep: number;
  steps: WelcomeStep[];
};

export function WelcomeStepper(props: WelcomeStepperProps) {
  const { activeStep, steps } = props;
  return (
    <Stepper index={activeStep}>
      {steps.map((step) => (
        <Step key={step.title}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>
          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>
          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
}
