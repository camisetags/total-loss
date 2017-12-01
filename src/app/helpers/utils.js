export const switchCase = key => (obj = {}) => (defaultCase) => {
  if (key in obj) {
    return obj[key]();
  }
  return defaultCase();
};

export const range = num => [...Array(num).keys()];

export function randomElement(lista) {
  const randomNumber = Math.floor(Math.random() * lista.length) + 1;
  const elementRandom = lista.find(element => element.id === randomNumber);
  return elementRandom;
}

export default { switchCase, range, randomElement: lista => lista };
