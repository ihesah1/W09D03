import './App.css';
import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Login from './components/Login'
import Register from './components/Register'
import Task from './components/Task'
import Admin from './components/Admin'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Nav/>}/>
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/register' element={<Register />}/>
        <Route exact path="/task" element={<Task/>}/>
        <Route exact path="/admin" element={<Admin/>}/>
      </Routes>
    </div>
  );
}


export default App;
