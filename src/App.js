import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <div className='App'>
      <div className="center_box">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
        </Routes>
      
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
