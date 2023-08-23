import { useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState("");

  // const fetchDog = () => {
  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((response) => response.json())
  //     .then((data) => setDogImgUrl(data.message));
  // };

  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
  };

  const showACountry = () => {
    console.log(countries[0].name.official);
  };

  fetchCountries();

  return (
    <>
      <div id="app">
        <h1>Country</h1>
        <button onClick={showACountry}>Gimme a country!</button>
        {/* <p>{country}</p> */}
      </div>
    </>
  );
}

export default App;
