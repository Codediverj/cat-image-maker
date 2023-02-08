const MainCard = ({img, handleHeartClick, alreadyFavorite}) => {
    const heartIcon = alreadyFavorite ? "💖" : "🤍";
    return(
      <div className="main-card">
        <img src={img} alt={img} width="400" />
        <button onClick={handleHeartClick}>{heartIcon}</button>
      </div>
    );
  };

  export default MainCard;