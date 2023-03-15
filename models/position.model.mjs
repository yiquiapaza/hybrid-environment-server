let position = {
  x: 0,
  y: 0,
  z: 0,
  state: false
};
//let state = { reset: false };
export const savePostion = (data) => {
  console.log(data);
  position = {
    x: data.x,
    y: data.y,
    z: data.z,
  };
};

export const getPostion = () => {
  return position;
};
