// Copyright 2004-present Facebook. All Rights Reserved.

import utils from '../utils';

jest.setTimeout(15000);

describe('life cycle', () => {
  beforeAll(() => {
    return utils.beforeAllPromise();
  });

  afterAll(() => {
    return utils.afterAllPromise();
  });

  test('if utils are mocked', () => {
    return utils.fakeRandomPromise();
  });
});
