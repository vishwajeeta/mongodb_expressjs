import './App.css';
import Login from './Login';
import Navbar from './Navbar';
import Register from './Register';

function App() {
  return (
    <>
    {/*<div className="div">
      <h1>Registeration Form</h1>
      <form>
    <label for="username"><b> Username:</b></label> 
    <input type="text" className='username' id="username" placeholder="username"/><br/>
    
    <label for="password"><b>password:</b> </label>
    <input type="password" className='password' id='password' placeholder='***********'/><br/>
    <label for="cpassword"> <b> confirm password:</b></label>
    <input type="password" className='cpassword'id='cpassword' placeholder='**********' />
    <br/>
    <error id="alert"></error>
    <input type="submit"  value="submit" className='submit'/>
    </form>
    </div>*/}
    
    <Navbar/>
    {/* <Register/>
    <Login/> */}

    </>
  );
}

export default App;
