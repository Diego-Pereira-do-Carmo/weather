import React from 'react';
import propTypes from 'prop-types';

function Card({ data }) {
  const {
    location,
    current,
  } = data;

  const handleHour = (hour) => {
    let date = new Date(hour);
    let hourFormate = date.toLocaleTimeString('pt-BR');
    let localTime = hourFormate.split(':').slice(0, 2).join(':');

    return localTime; 
  };

  return (
    <div className="bg-white p-6 my-10 rounded-lg shadow-md min-w-[300px]">
      <div className="text-center">
        <span className="block text-xl font-bold text-slate-700">{location.name}</span>
        <span className="text-slate-400 text-sm font-medium">
          {`${location.region}, ${location.country}`}
        </span>
      </div>

      <div className="flex justify-center mt-6 mb-4 font-semibold">
        <span className="text-8xl">{current.temp_c}</span>
        <span className="text-3xl mt-3">°C</span>
      </div>

      <div className="flex flex-col justify-center items-center">
        <img src={current.condition.icon} alt="weather icon" />
        <span className="font-medium text-slate-700">{current.condition.text}</span>
        <span className="text-slate-400 text-sm font-medium mt-1">
          {`Local Time: ${handleHour(location.localtime)}`}
        </span>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  data: propTypes.object,
}.isRequired;
