import { IFilm, IPerson } from 'common/models';

type ResponseType = IFilm[] | IPerson[];

const asyncFunc = async (url: string) => {
  return (await fetch(url)).json();
};

export const fetchApiInParallel = async (endpoints: string[]): Promise<ResponseType> => {
  try {
    const tasks = endpoints.map(async (endpoint) => asyncFunc(endpoint));

    const response = await Promise.all(tasks);
    return response as ResponseType;
  } catch (error) {
    throw new Error('An error occurred while fetching data');
  }
};
