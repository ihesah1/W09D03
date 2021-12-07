const initialState = {
    todo: [],
  };
//reduce func
  const TASK = (state = initialState, action) => {
    const { type, payload } = action; 
  
    switch (type) {
      case "TASK":
        console.log(payload);
        return payload;
      default:
        return state;
    }
  };
  export default TASK;