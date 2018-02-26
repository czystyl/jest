// Copyright 2004-present Facebook. All Rights Reserved.

export default {
  afterAllPromise: () => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('__AFTER__ALL__DONE__');
        resolve({completed: true});
      }, 500);
    });
  },
  beforeAllPromise: () => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('__BEFORE__ALL__DONE__');
        resolve({completed: true});
      }, 3500);
    });
  },
  fakePromise: () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({what: 'rejected'});
      }, 4000);
    });
  },
};
