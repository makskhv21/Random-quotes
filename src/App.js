import './App.css';
import React from 'react';
import Quotes from './component/Quotes';

function App() {

  const quoteURL = 'https://api.quotable.io/random';
  const imageURl = 'https://picsum.photos/300/450';

  const [data, setData] = React.useState({});

  const [image, setImage] = React.useState("")

  const [loadingData, setLoadingData] = React.useState(false);

  const [dataError, setDataError] = React.useState(false);

  const fetchData = async () => {
    setLoadingData(true);
    setDataError(false);

    try {
      const quoteContent = await fetch(quoteURL);
      if(!quoteContent) {
        throw new Error('Quote not found');
      }
      const data = await quoteContent.json();

      setData(data);

      const imageContent = await fetch(imageURl);
      if(!imageContent) {
        throw new Error('Image not found');
      }
      const image = imageContent.url;
      setImage(image)
    }
    catch(err) {
      setDataError(true);
    }
    setLoadingData(false);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleNewQuote = () => {
    fetchData();
  }

  return (
    <>
      <div className='Card'>
        <div className='Header'>Clever Quotes</div>
        
        <hr/>

        <div>
        {dataError && (
          <>
            <p>Error</p>
          </>
        )}
        {loadingData ? (
            <>
              <p>Loading quote...</p>
            </>
          ) : (
            <Quotes
              image={image}
              content={data.content}
              author={data.author}
            />
         )}
        </div>
        
        <hr/>

        <div className='Footer'>
          <button  className='btn' onClick={handleNewQuote}>
            Next
          </button> 
        </div>

      </div>       
    </>
  );
}

export default App;
