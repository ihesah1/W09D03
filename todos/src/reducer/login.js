//1-build reducer
//object
//what is state(valiuus) i will store to be global ?? token + info user
//instialvalues
const instialState = {
  role : "user",
  token : ""
}
///create reduce functions 
//reducer take two arg 1-state 2-action
//reducer check the action type and update state with payload
const login = (state = instialState,action )=>{ //keys action
   const {type , payload} = action; //payload > data (token&user) 
   //type we will use it in swich condition
   //type is in switch cases 
   switch (type){
        case "LOGIN": ///Type is LOGIN ., LOGIN >> راح نرسل له بي لود((payload)) عباره عن يوزر وتوكن
          const {user ,token} = payload;// *نرسل البي لود >  للتايب *لوقين
          localStorage.setItem("token", token);
          return{user ,token}
          
        case "LOGOUT":
           localStorage.clear();
           return{ ///should return instial State keys in (((any type)))
              user:"" ,
              token:""
           }
        default:
            return state
   }

}
export default login ;
