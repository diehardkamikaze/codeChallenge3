const throttle = (func, timeout) => {
  let i = true;
  let save_args = null, save_context;

  let wrapper = function(...args) {
    if (i) {
      func.apply(this, args);
      i = false;
      setTimeout(() => { 
        i = true;
        if (save_args !== null) {
          wrapper.apply(save_context, save_args);
          save_args = null;
          save_context = null;
        }
      }, timeout);
      return;
    }
    save_args = args;
    save_context = this;
  } 
  return wrapper;
}


const cycled_slice = (array, index1, index2) => {
  let result = [];
  index1 = index1 % array.length;
  index2 = index2 % array.length;
  let to_end = index2 <= index1 ? array.length :  index2;  

  for (;index1 < to_end; index1++)
    result.push(array[index1]);
  if (index2 < index1)
    for (let i = 0; i < index2; i++)
      result.push(array[i]);
  return result;
}

const combineReducers = (reducers = {}) => {
  return function(state, action) {
    let newState = {};
    for (let key in reducers) {
      newState[key] = reducers[key](state[key], action)
    }
    return {...state, ...newState};
  }
}

export { throttle, cycled_slice, combineReducers };