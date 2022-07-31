import React, { useState } from 'react';

import './App.css';
import { fetchNames } from './api/fetchNames';


function App() {
const [query, setQuery] = useState('')
const [hero, setHero] = useState('')

 const search = async (e) => {
   if (e.key === "Enter") {
     const data = await fetchNames(query);
     setHero(data);
     setQuery("");
    //  console.log(data);
   }
 };

  return (
    <div className="App">
      <div>
        <h1>Hero App</h1>
      </div>
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {hero.main && (
        <div>
          <h2>
            <span>{hero.id}</span>
          </h2>
          {/* <div>
            <img src={hero.image.xs} alt="" />
          </div> */}
        </div>
      )}
    </div>
  );
}

export default App;
