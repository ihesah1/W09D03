# ✅ Todo list App using Used React and Redux Hooks 📝

## Our app's User Stories  🙏🏼
Defining user stories before we begin our work will help us focus our work. Our app should fulfill the following stories:

As a user & admin, u can

* read a list of tasks.
* add a task .
* delete any task.


## Project Setup ✌️
## Technologies
* React js
* Redux for state managment 
* CSS

## Packages & Libraries
   ``` npm install```
   
   ``` npm start```
   
   ``` redux```
    
   ``` react-redux```

### Let's take a quick look at what the initial project contains:

/src
* index.js: the entry point file for the application. It renders the main <App> component.
* App.js: the main application component.
* App.css: styles for the complete application
* Components   
   * Register.js
   * Login.js
   * Nav.js
   * admin.js
   * Task.js
   
 #### Then first thing is to create a reducer with a default that returns the state. 🤞
* redux/reducer.js
```let reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
export default reducer 
   ```
Following by a store that collects the todo like the following code.
   
* redux/store.js
   
```
import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
let finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore)
export default function configureStore(initialState = { todos: [] }) {
  return finalCreateStore(reducer, initialState)
}
```
   
* redux/actions.js
   
```
let actions = {
}
export default actions
   
```
   
   
* Next, creating an HTML web page for todo list application, then create an entry point that connects React with Redux.
   
### Connecting Redux Store with React App
 Let's connect this store to our React application.

I like to connect store in the index.js file.
Open index.js file.

import Provider from the react-redux and store from store.js
   
```import { Provider } from "react-redux";```
```import store from "./redux/store";```
   
Now just wrap your component with this Provider and pass store in the Provider just like this,

```  ReactDOM.render(
  <React.StrictMode>
//Just like below 👇
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById("root")
); 
   ```


   
   
![image](https://user-images.githubusercontent.com/92258765/145149510-2327ac07-3fc7-42dc-b51e-83c21b04792b.png)
   
