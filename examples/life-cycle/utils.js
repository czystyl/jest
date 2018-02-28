// Copyright 2004-present Facebook. All Rights Reserved.

export default {
  afterAllPromise: () => {
    return new Promise(resolve => {
      console.log('after_start');

      setTimeout(() => {
        console.log('__AFTER__ALL__DONE__');
        resolve({completed: true});
      }, 1500);
    });
  },

  beforeAllPromise: () => {
    return new Promise(resolve => {
      console.log('before_start');

      setTimeout(() => {
        console.log('__BEFORE__ALL__DONE__');
        resolve({completed: true});
      }, 1000);
    });
  },

  fakePromise: () => {
    return new Promise(resolve => {
      console.log('promise_start');

      setTimeout(() => {
        console.log('promise_resolve');
        resolve({what: 'res'});
      }, 2500);
    });
  },
};
