import './App.css';
import React, { useState, useEffect } from 'react';
import Quotes from './component/Quotes';

import { quoteURL, imageURL } from './constants';

function App() {
  const [data, setData] = useState({});
  const [image, setImage] = useState('');
  const [loadingData, setLoadingData] = useState(false);
  const [dataError, setDataError] = useState(false);

  const fetchData = async () => {
    setLoadingData(true);
    setDataError(false);

    try {
      // Запит цитати
      const quoteResponse = await fetch(quoteURL);
      if (!quoteResponse.ok) {
        throw new Error('Quote not found');
      }
      const quoteData = await quoteResponse.json();
      setData(quoteData);

      // Запит зображення
      const imageResponse = await fetch(imageURL);
      if (!imageResponse.ok) {
        throw new Error('Image not found');
      }
      const imageData = await imageResponse.json();
      setImage(imageData.url);
    } catch (err) {
      setDataError(true);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Card">
      <div className="Header">Clever Quotes</div>
      <hr />
      <div>
        {dataError && <p>Error loading data</p>}
        {loadingData ? (
          <p>Loading quote...</p>
        ) : (
          <Quotes image={image} content={data.content} author={data.author} />
        )}
      </div>
      <hr />
      <div className="Footer">
        <button className="btn" onClick={fetchData}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;