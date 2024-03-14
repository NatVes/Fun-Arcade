// App.jsx
import React, { useEffect } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import fetchData from '../src/utils/API';

const App = () => {
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const imgData = await fetchData();
        console.log(imgData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataAsync();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Body />
      </main>
    </div>
  );
};

export default App;