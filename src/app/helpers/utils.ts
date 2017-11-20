export const switchCase = (key: any) => (obj: any = {}) => (defaultCase: any) => {
  if (key in obj) {
    return obj[key]();
  }
  return defaultCase();
};

export const range = (num: number) => Array.from(Array(num).keys());

export const objToArray = (obj: any) => Object.keys(obj).map(objKey => obj[objKey]);

export default { switchCase, range };
