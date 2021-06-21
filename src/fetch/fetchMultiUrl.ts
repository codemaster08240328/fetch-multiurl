import fetch from 'node-fetch';
import { WrongUrlError, EmptyInputError } from './Errors';

const fetchMultiUrl = (urls: string[]): Promise<any> => {
  try {
    if (!urls.length) {
      throw new EmptyInputError('Empty Url Array');
    }

    urls.forEach(url => {
      if (!url) throw new WrongUrlError('One of url array was wrong url')
    })

    const promises = urls.map((url) => fetch(url).then((res) => res.json()));
    return Promise.all(promises);
  } catch (e) {
    return Promise.reject(e);
  }
};

export default fetchMultiUrl;
