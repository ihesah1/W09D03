const LogOut = (state = "", action) => {
    const { type } = action;
    switch (type) {
      case "LOGOUT":
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        return state;
      default:
        return state;
    }
  };
  export default LogOut;