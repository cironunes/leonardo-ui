'use client';

import {
  Box,
  Fade,
  useSteps,
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Input,
} from '@chakra-ui/react';
import { useCallback, useRef, useState } from 'react';

import type { User } from '~/lib/core/user';
import { userCreationSteps } from '~/lib/core/user';

import { WelcomeStepper } from './WelcomeStepper';

// Form validation could use React Hook Form as recommended by the Chakra UI docs.
// However, I've followed the instructions and kept dependencies to a minimum.
// This function implements a basic validation for the form.
function isDisabled(activeStep: number, state: User) {
  let result;
  switch (activeStep) {
    case 1:
      result = state.username === '';
      break;
    case 2:
      result = state.jobtitle === '';
      break;
    default:
      result = false;
      break;
  }
  return result;
}

export type WelcomeProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (user: User) => void;
};

export function Welcome(props: WelcomeProps) {
  const { onClose, onSubmit, isOpen } = props;
  const [state, setState] = useState({
    username: '',
    jobtitle: '',
  });
  const username = useRef<HTMLInputElement>(null);
  const jobtitle = useRef<HTMLInputElement>(null);

  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: userCreationSteps.length,
  });

  const focusOnInput = useCallback((step: number) => {
    setTimeout(() => {
      if (step === 1) {
        username.current?.focus();
      } else if (step === 2) {
        jobtitle.current?.focus();
      }
    });
  }, []);

  const handleBack = useCallback(() => {
    const nextStep = activeStep - 1;
    setActiveStep(nextStep);
    focusOnInput(nextStep);
  }, [activeStep, focusOnInput, setActiveStep]);

  const handleSubmit = () => {
    if (activeStep === 2) {
      setActiveStep(1);
      setState({ username: '', jobtitle: '' });
      onClose();
      onSubmit(state);
      return;
    }

    const nextStep = activeStep + 1;
    setActiveStep(nextStep);
    focusOnInput(nextStep);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <ModalHeader>
            <WelcomeStepper activeStep={activeStep} steps={userCreationSteps} />
          </ModalHeader>
          <ModalBody>
            <Box style={{ position: 'relative', minHeight: 120 }}>
              <Fade
                in={activeStep === 1}
                style={{
                  width: '100%',
                  position: 'absolute',
                  visibility: activeStep === 1 ? 'visible' : 'hidden',
                }}
              >
                <Input
                  ref={username}
                  placeholder="Username"
                  tabIndex={0}
                  value={state.username}
                  onChange={(e) => {
                    setState((s) => ({
                      username: e.target.value,
                      jobtitle: s.jobtitle,
                    }));
                  }}
                />
              </Fade>
              <Fade
                in={activeStep === 2}
                style={{
                  width: '100%',
                  position: 'absolute',
                  visibility: activeStep === 2 ? 'visible' : 'hidden',
                }}
              >
                <Input
                  ref={jobtitle}
                  placeholder="Job title"
                  autoFocus
                  tabIndex={0}
                  value={state.jobtitle}
                  onChange={(e) => {
                    setState((s) => ({
                      jobtitle: e.target.value,
                      username: s.username,
                    }));
                  }}
                />
              </Fade>
            </Box>
          </ModalBody>
          <ModalFooter>
            {activeStep > 1 && (
              <Button mr={3} onClick={handleBack}>
                Back
              </Button>
            )}
            <Button
              type="submit"
              colorScheme="blue"
              mr={3}
              isDisabled={isDisabled(activeStep, state)}
            >
              {activeStep === 2 ? 'Submit' : 'Next'}
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
