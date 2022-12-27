import { useMutation } from 'react-query';
import { signIn } from 'service/auth';
import { SignInRequest } from 'service/auth/request';
import { SignInResponse } from 'service/auth/response';

const useSignIn = () => {
  return useMutation<SignInResponse, Error, SignInRequest>(signIn);
};

export default useSignIn;
