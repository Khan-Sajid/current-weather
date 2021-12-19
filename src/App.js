import react, { useState } from 'react';
import './App.css';
import StartPage from './components/startpage';
import Details from './components/contryDetails';
import Header from "./components/header"

function App() {

  const [countryDetails, setCountryDetails] = useState("");

  function fetchData(country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
      .then(function (response) {
        response.json()
          .then((jsonData) => {
            setCountryDetails(jsonData);
            console.log(jsonData);
          });
      })
      .catch(function (error) {

      });
  }

  return (
    <div className="App">
      < Header />
      {countryDetails
        ? < Details countryDetails={countryDetails} />
        : <StartPage fetchData={fetchData} />}
    </div>
  );
}

export default App;
