import { useState } from "react";
import React from 'react';
import { Memes } from './meme.jsx';
import { Jokes } from './jokes.jsx';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceLaugh } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

const Cat_animation = () => {
  return (
    <DotLottieReact
      src="https://lottie.host/6f344697-73fc-4fff-b60e-2bd198c6bcc9/EgmCQXfcmx.lottie"
      loop
      autoplay
    />
  );
};

const Laughing = () => {
  return (
    <DotLottieReact
      src="https://lottie.host/84bc538d-1a99-4694-abdf-f9df4db3954e/B1VS1tQWl2.lottie"
      loop
      autoplay
    />
  );
};

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="content">

      <div className="joke-box" onClick={() => navigate("/jokes")}>
        <div className="smile">
            <FontAwesomeIcon id="icon" icon={faFaceLaugh} />
          </div>
        <h3>Joke Generator</h3>
        <div className="para1">
          <p className="para">Get instant access to hilarious jokes with just one click</p>
        </div>
      </div>

      <div className="meme-box" onClick={() => navigate("/meme")}>
        <div className="image-icon">
          <FontAwesomeIcon id="icon1" icon="fa-regular fa-image" />
        </div>
        <h3> Meme Generator</h3>
        <div className="para1">
        <p className="para">Generate viral-worthy memes in seconds with our easy-to-use generator</p>
        </div>
      </div>
    </div>
  );
}


function App() {
  return (
   <div className="main">
    <div className="box1">
      <div className="cat_animation">
        <Cat_animation/>
      </div>
      <h1>Humoria</h1>
      <p id="first">Your one-stop destination for instant laughs!</p>
      <p id="second">Generate hilarious jokes and epic memes.</p>
      {/* <p>Generate hilarious jokes, epic memes, and chat with the funniest AI on the internet.</p> */}
    </div>
    <div className="container">
      {/* <Jokes />
      <Memes /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/jokes" element={<Jokes />} />
          <Route path="/meme" element={<Memes />} />
        </Routes>
      </BrowserRouter>
    </div>
    <div className="upper">
      <div className="laugh">
        <Laughing />
      </div>
    </div>
   </div>
  );
}

export default App;