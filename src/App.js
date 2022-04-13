import './css/style.min.css';
import React from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharactersGrid from './components/characters/CharactersGrid';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`,
      );

      console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
      <CharactersGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
