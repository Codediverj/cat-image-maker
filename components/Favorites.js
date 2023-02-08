const Favorites = ({favorites}) => {
    console.log({favorites});
    if(favorites.length === 0){
        return <div className="no-favorite">Press the heart above the picture to save the cat's picture!</div>
    }
    return (
      <ul className="favorites">
        {favorites.map((cat)=>(
          <li key={cat}><img src={cat} alt={cat} style={{width:"150px"}}/></li>
        ))}
      </ul>
    );
  };

  export default Favorites;