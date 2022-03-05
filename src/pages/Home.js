import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Card from '../components/Card';
import songs from './list';



alert("i suck")

function Home() {

    

    return (
        <div>
           <Header/>
           <Form />
           <div className="container">
        {songs.map((music) => {
          return <Card music={music} />;
        })}
      </div>
           
           
        </div>
    );
};

export default Home;