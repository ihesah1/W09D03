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