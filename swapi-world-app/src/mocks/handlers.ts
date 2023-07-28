import { rest } from 'msw';

export const handlers = [
  // Handles a GET /user request
  rest.get('/swapi', (_, res, ctx) => res(ctx.json({}))),
];
