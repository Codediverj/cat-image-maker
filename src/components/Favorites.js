const Favorites = ({favorites}) => {
    console.log({favorites});
    if(favorites.length === 0){
        return <div className="no-favorite bg-mild-mint w-80 mx-auto my-0 p-5 mt-8">Press the heart above the picture to save the cat's picture!</div>
    }
    return (
      <ul className="favorites flex list-none justify-center flex-wrap gap-3.5 mt-8">
        {favorites.map((cat)=>(
          <li key={cat}><img src={cat} alt={cat} style={{width:"150px"}}/></li>
        ))}
      </ul>
    );
  };

  export default Favorites;