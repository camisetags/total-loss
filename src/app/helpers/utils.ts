export const switchCase = (key: any) => (obj: any = {}) => (defaultCase: any) => {
  if (key in obj) {
    return obj[key]();
  }
  return defaultCase();
};

export const range = (num: number) => Array.from(Array(num).keys());

export const objToArray = (obj: any) => Object.keys(obj).map(objKey => obj[objKey]);

export const mergeRequestTypes = (oldObject: any, newObject: any) => {
  const old = { ...oldObject };
  const newO = { ...newObject };

  if (!('types' in old)) {
    old.types = [];
  }

  return [...old.types, ...newO.types];
};

export const mergeStateList = (oldList: any, newList: any) => {
  const old = { ...oldList };
  const newL = { ...newList };

  Object.keys(newList).forEach((id) => {
    newL[id].types = mergeRequestTypes(old[id], newL[id]);
    old[id] = id in oldList ? { ...oldList[id], ...newL[id] } : { ...newList[id] };
  });

  return old;
};

export const paginateArray = (list: any[], pageSize: number, pageNumber: number) => {
  let pn = pageNumber;
  pn -= 1; // because pages logically start with 1, but technically with 0
  return list.slice(pageNumber * pageSize, (pn + 1) * pageSize);
};

export default { switchCase, range };
