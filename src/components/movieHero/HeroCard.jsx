import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const HeroCard = ({
  movie: { id, backdrop_path, title, popularity, runtime, overview, starring, genres=[], tags, video },
}) => {
  return (
    <>
      <div className="box-home">
        <div className="coverImage">
          <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="" />
        </div>
        <div className="content flex">
          <div className="details row">
            <h1>{title}</h1>
            <div className="rating flex">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>

            <label>{runtime} mins</label>


          <p>{overview}</p>
          <div className="cast">
            
            <h4>
              <span>Genres </span>
              {genres.join(', ')}
            </h4>
            
          </div>
          <button className="primary-btn">
            <i className="fas fa-play"></i> PLAY NOW
          </button>
          </div>
          
          <div className="playButton row">
            <Link to={`/singlepage/${id}`}>
                <button >
                    <div className="img">
                        <img src="./images/play-button.png" alt="" />
                        <img src="./images/play.png" alt="" className="change" />
                    </div>
                    WATCH TRAILER
                </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCard;
