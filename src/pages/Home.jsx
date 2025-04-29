import React from "react";
import './home.css'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();

    return (
      <div className="home-container">
        <h2 className="home-title">Добро пожаловать в <b>DevSphere Online IT Academy</b></h2>
      
  
        <div className="home-box">
          <h3>Войдите, чтобы получить доступ к урокам !</h3>
         
          
          <button onClick={() => navigate('/login')} className="home-login-btn">
      Войти
    </button>
        </div>
      </div>
    );
  };
  
  export default Home;
  