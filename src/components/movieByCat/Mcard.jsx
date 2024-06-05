import React from 'react'

const Ucard = ({movie:{id,poster_path,title,release_date,runtime}}) => {
  return (
    <>
        <div className="MovieBox">
            <div className="img">
                <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" />
            </div>
            <div className="text">
                <h3>{title}</h3>
                <span>{`${runtime} mins`}</span><br/>
                <button className="primary-btn">
                    <i className="fa fa-play"></i>PLAY NOW
                </button>
            </div>
        </div>
    </>
  )
}

export default Ucard
