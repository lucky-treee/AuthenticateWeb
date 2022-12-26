// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import { SignInRequest, SignUpRequest } from 'service/auth/request';
import { SignInResponse, SignUpResponse } from 'service/auth/response';

const auth = [
  rest.post('/auth/signin', async (req, res, ctx) => {
    const { email, password } = await req.json<SignInRequest>();

    if (email === 'test' && password === 'test') {
      return res(
        ctx.status(200),
        ctx.json<SignInResponse>({ message: '로그인 성공' })
      );
    }

    return res(
      ctx.status(401),
      ctx.json<SignInResponse>({ message: '로그인 실패' })
    );
  }),
  rest.post('/auth/signup', async (req, res, ctx) => {
    const { email, id, password } = await req.json<SignUpRequest>();

    if (email === 'test' && password === 'test' && id === 'test') {
      return res(
        ctx.status(200),
        ctx.json<SignUpResponse>({ message: '회원가입 성공' })
      );
    }

    return res(
      ctx.status(401),
      ctx.json<SignUpResponse>({ message: '회원가입 실패' })
    );
  }),
];

export default auth;
