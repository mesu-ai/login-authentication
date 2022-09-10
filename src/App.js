import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <div className='App'>
      <div className="center_box">
        <AuthProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
        </Routes>
      
        </BrowserRouter>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
