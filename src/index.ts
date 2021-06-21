import fetchMultiUrl from './fetch/fetchMultiUrl';
import { WrongUrlError, EmptyInputError } from './fetch/Errors';

export { 
  fetchMultiUrl as get,
  WrongUrlError,
  EmptyInputError
};
