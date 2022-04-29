import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import './css/style.css'
import Login from './component/Login'
import Main from './component/Main';
import Registration from './component/Registration';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Registration />} />
          <Route path='/main' element={<Main />} />
          <Route path='/' element={<Navigate replace to='/main' />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
