import { rest } from 'msw';

import { coreConfig } from 'common/core/config';

import peopleMocks from './results/peopleMocks';
import planetsMocks from './results/planetsMocks';
import starshipsMocks from './results/starshipsMocks';

const baseEndPoint = coreConfig.endpoints.root;

export const handlers = [
  rest.get(`${baseEndPoint}planets/`, (_, res, ctx) => res(ctx.json(planetsMocks))),
  rest.get(`${baseEndPoint}people/`, (_, res, ctx) => res(ctx.json(peopleMocks))),
  rest.get(`${baseEndPoint}starships/`, (_, res, ctx) => res(ctx.json(starshipsMocks))),
];
