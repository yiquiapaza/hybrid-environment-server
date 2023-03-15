let barElements = [];

export const pushElement = (data) => {
  barElements.push(data);
};

export const getAll = () => {
  return barElements;
};

export const clearBarElement = () => {
  let temp = barElements;
  barElements = [];
  return temp;
};
