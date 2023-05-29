let barElements = [];

export const pushElement = (data) => {
  console.log(data)
  barElements.push(data);
};

export const getAll = () => {
  console.log(barElements)
  barElements = barElements.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === barElements.findIndex(obj => {
      return JSON.stringify(obj) === _value
    })
  })
  return barElements;
};

export const clearBarElement = () => {
  let temp = barElements;
  barElements = [];
  return temp;
};
