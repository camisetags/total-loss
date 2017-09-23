export const switchCase = key => (obj = {}) => (defaultCase) => {
  if (key in obj) {
    return obj[key]();
  }
  return defaultCase();
};

export const range = num => [...Array(num).keys()];

export default { switchCase, range };
