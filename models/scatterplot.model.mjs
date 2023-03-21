let scatterElements = [];

export const pushElement = (data) => {
  console.log(data);
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
