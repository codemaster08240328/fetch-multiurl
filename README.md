# Fetch MultiURL Package

## Dependencies what used.
1. `node-fetch`
-  This package used to fetch json data from url

2. `jest`, `ts-jest`, `@types/jest` 
- These packages were used for unit-test

3. Other packages were installed in dev method for lint and format.

## How to use
- Install package
```
npm install --save-dev fetch-multiurl
```

- Sample code for fetching json from multiple urls
```
import { get } from 'fetch-multiurl'

const urls = [
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
];

get(urls).then(res => console.log(res));
```

## How to contribute
- Clone the repository
```
git clone https://github.com/mben-code/request-multiple-urls.git
```

- Add your contributes into `/src`
- Update test inside `/src/tests`
- Inrease the version inside `package.json`
```
{
  ...
  "version": "1.0.11", <--- it should be increased!--->
  ...
}
```
- Publish the package into NPM
```
npm run build && cp package.json lib
cd lib
npm publish
```

## How to run test
This module is fully unit tested.
```
npm run test
```

## Error States
Currently, this package supports 2 types of `Error` instance. (It can be improved by any contributor.)
- `WrongUrlError` : If an input UrlArray contains one or more empty string, package will throw this error instance.

- `EmptyInputError` : If an input UrlArray is an empty array, this error instance will be thrown.

### Error handling
```
import { get, EmptyInputError } from 'fetch-multiurl'

get([])
  .then(res => console.log(res))
  .catch(e => {
    if (e.isInstanceOf(EmptyInputError)) {
      console.log('Empty Array passed');
    }
  });
```