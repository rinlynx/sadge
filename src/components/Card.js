
import React from 'react';

function Card(props){
    return(
        <div className="card">
          <img src={props.music.Poster} />
          <h2> {props.music.Title} </h2>
          <p> {props.music.Album} </p>
        </div>
    );
};

export default Card;