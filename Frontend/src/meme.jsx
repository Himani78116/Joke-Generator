import React from 'react';
import { useState } from "react";
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

export function Memes() {
  const navigate = useNavigate();
  const [meme, setMeme] = useState(null);
  const [showAnimation, setShowAnimation] = useState(false);

  const getMeme = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/memes/random"
      );

      const data = await response.json();
      console.log(data);

      setMeme(data);

    }catch (error) {
      console.error("Error fetching meme:", error);
    }
  };

  return(
    <div className="meme_gen" style={{textAlign:"center", marginTop:"100px", fontFamily:"Arial"}}>
      <div className="top">
        <button id="back1" onClick={() => navigate("/")}>
        ⬅ 
        </button>

        <h2 id="title1">Meme Generator</h2>
      </div>
        <button id="memeb" onClick={getMeme}>Get Memes</button>
        {meme && (
        <div style={{ marginTop: "20px" }}>
          <h3>{meme.title}</h3>

          <img
            src={meme.image_url}
            alt="meme"
            width="400"
            style={{ borderRadius: "10px" }}
          />

          {showAnimation && <Animation />}
        </div>
      )}

    </div>
  );
};