export const eventually = assertFn =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        assertFn();
      } catch (e) {
        return reject(e);
      }
      resolve();
    }, 10);
  });

export const expectTypes = (reducer, types) => () =>
  expect(reducer.mock.calls.map(x => x[1].type)).toEqual(types);
