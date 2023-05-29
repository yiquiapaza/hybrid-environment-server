let scatterElements = [];

export const pushElement = (data) => {
  console.log(data);
  scatterElements = scatterElements.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === scatterElements.findIndex(obj => {
      return JSON.stringify(obj) === _value
    })
  })
  scatterElements.push(data);
};

export const getAll = () => {
  console.log(scatterElements);
  return scatterElements;
};

export const clearScatteplotElement = () => {
  let temp = scatterElements;
  scatterElements = [];
  return temp;
};
