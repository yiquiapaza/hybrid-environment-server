let position = {};
let state = { reset: false };
export const savePostion = (data) => {
  position = {
    x: data.x,
    y: data.y,
    z: data.z,
  };
};

export const getPostion = () => {
  return position;
};

export const reset = () => {
  if (state.reset) {
    state = { reset: true };
  } else {
    state = { reset: true };
  }
  return state;
};
