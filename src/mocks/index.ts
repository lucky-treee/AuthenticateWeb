// eslint-disable-next-line import/no-extraneous-dependencies
import { setupWorker } from 'msw';
import authHandler from 'mocks/auth';

const worker = setupWorker(...authHandler);

export default worker;
