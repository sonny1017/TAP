
import './App.css';
import styles from './App.module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { host } from './config/config';
import { useAuthStore } from './store/store';
import { ChatsProvider } from './context/ChatsContext';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Mypage from './pages/Mypage/Mypage';

import { useEffect } from 'react';
import { api } from './config/config';
import { jwtDecode } from 'jwt-decode'
import { ABuiz } from './pages/ABusiness/ABuiz';


function App() {
  const { login,isAuth ,setAuth} = useAuthStore();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token != null) {
      api.post(`/auth`).then((resp) => {
        const decoded =jwtDecode(token);
        login(token);
        setAuth(decoded);
      }).catch((resp) => {
        alert('인증되지 않은 사용자 입니다')
      })
      
    }
  }, [])
  return (
    <ChatsProvider>
      <Router>
        <div className={styles.container}>
          <Header />
          <Routes>  
           {!isAuth&&(<Route path='/login/*' element={<Login />} />)}
            <Route path='/*'element={<Main/>}/>
            <Route path='/mypage/*'element={<Mypage/>}/>
            <Route path='/buiz/*'element={<ABuiz/>}/>
          </Routes>
          <Footer />
        </div>
      </Router>
    </ChatsProvider>
  );
}

export default App;
