import "./App.css";
import { useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
  };

  const countryItems = countries.map((country, i) => {
    return <li key={i}>{country.name.common}</li>;
  });

  return (
    <>
      <h1>Countries of the World</h1>
      <button onClick={fetchCountries}>Gimme the countries!</button>
      <ul id="app">{countryItems}</ul>
    </>
  );
}

export default App;
