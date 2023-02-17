const MainCard = ({img, handleHeartClick, alreadyFavorite}) => {
    const heartIcon = alreadyFavorite ? "💖" : "🤍";
    return(
      <div className="main-card bg-slate-100 flex justify-center flex-wrap py-4">
        <div className="relative">
          <img src={img} alt={img} width="400" className="rounded-lg" />
          <button onClick={handleHeartClick} className="absolute top-4 right-4 w-10 h-10 bg-mild-mint/50 rounded-lg">{heartIcon}</button>
        </div>
      </div>
    );
  };

  export default MainCard;