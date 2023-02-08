import './App.css';
import React from "react";
import Title from './components/Title';
import Form from './components/Form';
import Favorites from './components/Favorites';
import MainCard from './components/MainCard';

const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};

const fetchCat = async (text) => {
  const OPEN_API_DOMAIN = "https://cataas.com";
  const response = await fetch(
    `${OPEN_API_DOMAIN}/cat/says/${text}?json=true`
  );
  const responseJson = await response.json();
  return `${OPEN_API_DOMAIN}/${responseJson.url}`;
};


const App = () => {
  const CAT1 = "https://cataas.com/cat/says/hello%20world!";

  const [counter, setCounter] = React.useState(()=>{
    return jsonLocalStorage.getItem("counter");
  });
  const [mainCat, setMaincat] = React.useState(CAT1);
  const [favorites, setFavorites] = React.useState(()=>{
    return jsonLocalStorage.getItem("favorites") || [];
  });
  const alreadyFavorite = favorites.includes(mainCat);

  async function setInitiaialCat(){
    const newCat = await fetchCat("First Cat");
    setMaincat(newCat);
  }

  React.useEffect(()=>{
    setInitiaialCat();
  }, []);


  async function updateMainCat(value){
    const newCat = await fetchCat(value);
    setMaincat(newCat);

    setCounter((prev)=> {
      const nextCounter = prev + 1;
      localStorage.setItem("counter", nextCounter);
      return nextCounter;
    });
    
  }

  function handleHeartClick (){
    const nextFavorites = [...favorites, mainCat];
    setFavorites(nextFavorites);
    jsonLocalStorage.setItem("favorites", nextFavorites);
  }

  const counterTitle = counter===null ? "" : counter;

  return(
    <div>
      <Title>Cat{counterTitle} Say...</Title>
      <Form updateMainCat={updateMainCat}/>
      <MainCard img={mainCat} handleHeartClick={handleHeartClick} alreadyFavorite={alreadyFavorite}/>
      <Favorites favorites={favorites}/>
   </div> 
  );
};

export default App;
