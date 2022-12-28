import { useMutation } from 'react-query';
import { signIn } from 'service/auth';
import { SignInRequest } from 'service/auth/request';
import { SignInResponse } from 'service/auth/response';

interface useSignInHandler {
  onSuccess?: (data: SignInResponse) => void;
  onError?: (error: Error) => void;
}

const useSignIn = (mutationHandler?: useSignInHandler) => {
  const { onSuccess, onError } = mutationHandler || {};

  return useMutation<SignInResponse, Error, SignInRequest>(signIn, {
    onSuccess,
    onError,
  });
};

export default useSignIn;
