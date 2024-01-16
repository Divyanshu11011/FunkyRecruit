import React, { useState } from 'react';
import Select from 'react-select';
import "./App.css";
import QuesList from "./QuesList";
import video1 from "./1.mp4";
import video2 from "./fe.mp4";
import video3 from "./3.mp4";
import interviewImage1 from "./interviewer/interview1.png";
import interviewImage3 from "./interviewer/interview2.png";
import interviewImage2 from "./interviewer/interview3.png";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [optionSelected, setOptionSelected] = useState(false);

  const options = [
    { value: video1, label: 'Interviewer 1', image: interviewImage1 },
    { value: video2, label: 'Interviewer 2', image: interviewImage2 },
    { value: video3, label: 'Interviewer 3', image: interviewImage3 }
  ];

  const handleVideoChange = (selectedOption) => {
    setSelectedVideo(selectedOption.value);
    setOptionSelected(true);
  };

  return (
    <div className="App">
      {!optionSelected && (
        <div className='avatar-dropdown'>
          <Select
            options={options}
            onChange={handleVideoChange}
            isSearchable={false}
            placeholder="Choose Your AI Interviewer"
            components={{ Option: CustomOption }}
          />
        </div>
      )}

      {selectedVideo && (
        <>
          <video className="videoTag" autoPlay loop muted>
            <source src={selectedVideo} type="video/mp4" />
          </video>
          <div className="overlay">
            <QuesList />
          </div>
        </>
      )}
    </div>
  );
}

const CustomOption = ({ innerProps, label, data }) => (
  <div {...innerProps}>
    <img src={data.image} alt={label} className="avatar-image" />
    {label}
  </div>
);

export default App;