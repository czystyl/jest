// Copyright 2004-present Facebook. All Rights Reserved.

export default {
  authorize: () => {
    // implementation
    return 'token';
  },
  isAuthorized: secret => secret === 'wizard',
};
