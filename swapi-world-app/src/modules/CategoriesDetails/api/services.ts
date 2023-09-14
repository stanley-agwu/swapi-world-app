import { IFilm, IPerson, ISpecie, IStarship, IVehicle } from 'common/models';
import { Notification } from 'common/utils/messages';

type ResultType = IFilm | IPerson | IStarship | IVehicle | ISpecie;
interface ApiResponse {
  status: string;
  value: ResultType;
}

interface ResponseResult {
  results: ResultType[] | null;
  errors: string | null;
}

const asyncFunc = async (url: string) => {
  return (await fetch(url)).json();
};

enum PromiseStatusEnum {
  fulfilled = 'fulfilled',
  rejected = 'rejected',
}

export const fetchApiInParallel = async (endpoints: string[]): Promise<ResponseResult> => {
  try {
    const tasks = endpoints.map(async (endpoint) => asyncFunc(endpoint));

    const response = await Promise.allSettled(tasks);
    const errors = response.filter(({ status }) => status === PromiseStatusEnum.rejected);
    if (errors.length) {
      throw new Error(Notification.error.message);
    }
    const successes = response
      .filter(
        (res): res is PromiseFulfilledResult<ApiResponse> =>
          res.status === PromiseStatusEnum.fulfilled
      )
      .map((item) => item.value as unknown as ResultType);
    return { results: successes, errors: null };
  } catch (error) {
    return { results: null, errors: Notification.error.message };
  }
};
