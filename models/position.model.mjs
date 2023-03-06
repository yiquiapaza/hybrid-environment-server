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
    state: false
  };
};

export const getPostion = () => {
  return position;
};

export const reset = () => {
  if (position.state) {
    position.state = false;
  } else {
    position.state = true;
  }
  return position;
};
