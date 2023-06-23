import React, { useState } from 'react';
import Card from './components/Card';
import fetchData from './service/api';

function App() {
  const [showCard, setShowCard] = useState(false);
  const [city, setCity] = useState('');
  const [data, setData] = useState({});

  const handleInput = ({ target: { value } }) => {
    setCity(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setData(await fetchData(city));
    setShowCard(true);
    setCity('');
  };

  return (
    <div id="container" className="flex flex-col w-full h-screen items-center sm:justify-center p-4">

      <h1 className="text-4xl my-10">Weather App</h1>

      <form onSubmit={handleSubmit} className="fixed bottom-10 w-full flex p-4 sm:relative sm:mt-10 justify-center">
        <input
          value={city}
          onChange={handleInput}
          className="p-3 rounded-lg outline-blue-600 w-full flex-1 sm:max-w-[30%]"
          type="text"
          placeholder="Type the Name of Some City"
        />
        <button
          type="submit"
          className="bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold"
        >
          Found
        </button>
      </form>
      {showCard ? (<Card data={data} />) : ''}

    </div>
  );
}

export default App;
