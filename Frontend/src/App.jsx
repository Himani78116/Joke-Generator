import { useState } from "react";

function App() {
  const [joke, setJoke] = useState("Click the button to get a joke!");

  const getJoke = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/joke/random");
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      setJoke("Error fetching joke. Make sure the backend is running.");
    }
  };

  return (
    <div style={{textAlign:"center", marginTop:"100px", fontFamily:"Arial"}}>
      <h1>Joke Generator</h1>
      <button onClick={getJoke} style={{padding:"10px 20px", fontSize:"16px"}}>
        Get Joke
      </button>
      <p style={{marginTop:"30px", fontSize:"18px"}}>{joke}</p>
    </div>
  );
}

export default App;
