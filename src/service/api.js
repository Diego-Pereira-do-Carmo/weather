// const KEY = '84c6b4febe8f47af9b0170801232605';
// const fetchData = async (city) => {
//   const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

//   const fetchResponse = await fetch(url);
//   const data = await fetchResponse.json();
//   console.log(data);
//   return data;
// };


const KEY = '84c6b4febe8f47af9b0170801232605';
const fetchData = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

  try {
    const fetchResponse = await fetch(url);
    const data = await fetchResponse.json();
    
    if (data.error) {
      throw data.error.message;
    }
    return data;

  } catch (error) {
    const initialData = {
      location: {
        name: error,
        region: '',
        country: '-',
      },
      current: {
        temp_c: 0,
        condition: {
          text: '-',
          icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
        },
      },
    };
    return initialData;
  }
};


export default fetchData;
