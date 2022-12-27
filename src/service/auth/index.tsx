import { SignInRequest, SignUpRequest } from 'service/auth/request';
import { SignInResponse, SignUpResponse } from 'service/auth/response';
import APIBuilder from 'utils/APIBuilder';

const API = new APIBuilder({ baseURL: 'http://localhost:8000' });

export const signIn = async (
  request: SignInRequest
): Promise<SignInResponse> => {
  const { data } = await API.post<SignInResponse>('/auth/signin', request);

  return data;
};

export const signUp = async (
  request: SignUpRequest
): Promise<SignUpResponse> => {
  const { data } = await API.post<SignUpResponse>('/auth/signup', request);

  return data;
};
