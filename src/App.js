import React, { useEffect, useState } from 'react';
import './css/style.min.css';
import axios from 'axios';
import Header from './components/ui/Header';
import CharactersGrid from './components/characters/CharactersGrid';
import Search from './components/ui/Search';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`,
      );

      // console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharactersGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
