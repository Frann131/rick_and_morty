import React, { useState } from 'react'
import './App.css'
import { Route, Routes, useLocation } from "react-router-dom";
import Detail from './components/Detail.jsx';
import Cards from './components/Cards.jsx'
import NavBar from './components/NavBar.jsx'
import About from './components/About.jsx';
import Form from './components/Form.jsx';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {

  const [characters, setCharacters] = useState([])
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'franmindurry@gmail.com'
  const password = 'Appfrontm2'

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  function onClose(id) {
    setCharacters(oldCharacters =>
      oldCharacters.filter(char => char.id !== id)
    );
  };

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }
  
  const location = useLocation();

  return (
    <div>
      {location.pathname!=='/' && <NavBar onSearch={onSearch}/>}
      <Routes>
        <Route path='/' element={ <Form login={login}/> }/>
        <Route path='/home' element={ <Cards characters={characters} onClose={onClose} /> } />
        <Route path='/about' element={<About/>} />
        <Route path='/detail/:detailId' element={<Detail/>} />
      </Routes>
    </div>
  )
}

export default App
