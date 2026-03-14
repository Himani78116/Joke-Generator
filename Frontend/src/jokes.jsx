import { useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Animation = () => {
  return (
    <DotLottieReact
      src="https://lottie.host/4adfcf66-170d-4fbd-a3dc-e37b5b4b130c/ms56zvfsAy.lottie"
      loop
      autoplay
    />
  );
};

function Category_jokes({ setCategory}) {
  return (
    <div className="buttons">
      <div className="row1">
        <button onClick={() => setCategory("clean")}>Clean</button>
        <button onClick={() => setCategory("relationship")}>Relationship</button>
        <button onClick={() => setCategory("dark")}>Dark</button>
        <button onClick={() => setCategory("blondes")}>Blondes</button>
      </div>

      <div className="row2">
        <button onClick={() => setCategory("animal")}>Animal</button>
        <button onClick={() => setCategory("food")}>Food</button>
        <button onClick={() => setCategory("sport")}>Sport</button>
        <button onClick={() => setCategory("law")}>Law</button>
      </div>
      
      <div className="row3">
        <button onClick={() => setCategory("nerdy")}>Nerdy</button>
        <button onClick={() => setCategory("political")}>Political</button>
        <button onClick={() => setCategory("school")}>School</button>
        <button onClick={() => setCategory("jewish")}>Jewish</button>
      </div>

      <div className="row4">
        <button onClick={() => setCategory("holiday")}>Holiday</button>
        <button onClick={() => setCategory("analogy")}>Analogy</button>
        <button onClick={() => setCategory("christmas")}>Christmas</button>
        <button onClick={() => setCategory("kids")}>Kids</button>
      </div>
    </div>
  )
}

export function Jokes() {
      const navigate = useNavigate();
      const [category, setCategory] = useState("");
      console.log(category);
      const [joke, setJoke] = useState("Click the button to get a joke!");
      const [showAnimation, setShowAnimation] = useState(false);
    
      const getJoke = async () => {
        try {
          const response = await fetch(`http://localhost:8000/api/joke/random?category=${category}`);
          const data = await response.json();
          
          setJoke(data.joke || data.text);
          setShowAnimation(true);
          setTimeout(() => setShowAnimation(false), 3000);
        } catch (error) {
          setJoke("Oops! Something went wrong. Try again.");
          setShowAnimation(false);
        }
      };

      return (
        <div className="joke_gen" style={{textAlign:"center", marginTop:"100px", fontFamily:"Arial"}}>
            <div className="top">
              <button id="back" onClick={() => navigate("/")}>
              ⬅ 
              </button>

              <h2 id="title">Joke Generator</h2>
            </div>
            <Category_jokes setCategory={setCategory} />
            <button id="joke" onClick={getJoke} style={{ fontSize:"16px"}}>
                Get Joke
            </button>
      
            <p style={{marginTop:"30px", fontSize:"18px"}}>{joke}</p>
            {showAnimation && <Animation />}
      
        </div>
      );
    
}