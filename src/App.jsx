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
    console.log("data:", data);
    console.log("data[0]:", data[0]);
    console.log("data[0].name.official:", data[0].name.official);
    setCountries(data);
  };

  return (
    <>
      <div id="app">
        <h1>Country</h1>
        <button onClick={fetchCountries}>Gimme the countries!</button>
        {/* <p>{country}</p> */}
      </div>
    </>
  );
}

export default App;
