let scatterElements = [];

export const getAll = async () => {
  return scatterElements;
};

export const pushElement = (data) => {
  scatterElements.push(data);
};

export const clearScatteplotElement = () => {
  let temp = scatterElements;
  scatterElements = [];
  return temp;
};
