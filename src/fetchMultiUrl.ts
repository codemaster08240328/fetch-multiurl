import fetch from 'node-fetch';

const fetchMultiUrl = (urls: string[]): Promise<any> => {
  try {
    if (!urls.length) {
      throw new Error('Empty Url Array');
    }
    const promises = urls.map((url) => fetch(url).then((res) => res.json()));
    return Promise.all(promises);
  } catch (e) {
    return Promise.reject(e);
  }
};

export default fetchMultiUrl;
