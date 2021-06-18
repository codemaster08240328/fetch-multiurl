import { get } from '..';
import { mocked } from 'ts-jest/utils';
import * as fs from 'fs';
import fetch from 'node-fetch';

const MOCK_DATA_PATH = './src/tests/__mock__/test_data.json';

jest.mock('node-fetch');

beforeEach(() => {
  mocked(fetch).mockClear();
});

function getMockJson(filePath: string): any {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

describe('MultiUrlFetch test', () => {
  test('MultiUrlFetch Works with 3 length url array', async () => {
    const expectedData = getMockJson(MOCK_DATA_PATH);

    mocked(fetch, true).mockImplementation((): Promise<any> => {
      return Promise.resolve({
        json: () => Promise.resolve(expectedData),
      });
    });

    const actualData = await get(['', '', '']);

    expect(mocked(fetch)).toHaveBeenCalledTimes(3);
    expect(actualData).toContain(expectedData);
    expect(actualData.length).toBe(3);
  });

  test('MultiUrlFetch throws error with an empty url array', () => {
    expect(get([])).rejects.toMatch('Empty Url Array');
  });
});
