const lineElements = [];

export const pushElement = (data) => {
  lineElements.push(data);
};

export const getAll = () => {
  return lineElements;
};
