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
          wrapper.apply(save_args, save_context);
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

export { throttle };