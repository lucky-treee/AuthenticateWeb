import { useMutation } from 'react-query';
import { signUp } from 'service/auth';
import { SignUpRequest } from 'service/auth/request';
import { SignUpResponse } from 'service/auth/response';

interface useSignUpHandler {
  onSuccess?: (data: SignUpResponse) => void;
  onError?: (error: Error) => void;
}

const useSignUp = (mutationHandler?: useSignUpHandler) => {
  const { onSuccess, onError } = mutationHandler || {};

  return useMutation<SignUpResponse, Error, SignUpRequest>(signUp, {
    onSuccess,
    onError,
  });
};

export default useSignUp;
