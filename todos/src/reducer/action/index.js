//this actions is events that occur in the app based on user input,
// and updates in the state
// تسوي ترتيب وتنظيم للستيت (Action)
//function dispatsh on state

// نسوي عليها dispatch
export const logIn = (data) => {
    return {
      type: "LOGIN",
      payload: data,
    };
  };
export const LogOut = () => {
    return {
      type: "LOGOUT",
    };
  };
export const TASK = (data) => {
  return {
      type: "TASK",
      payload: data,
    };
  };