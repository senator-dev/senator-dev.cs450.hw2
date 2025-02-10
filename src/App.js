import React, { useState  } from 'react';
import "./App.css";
import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';

const App = () => {

  const [state, setState] = useState({
    contactInfo: {
      name: "Christopher La Valle",
      occupation: "Data Scientist",
      email: "cwl7@njit.edu",
      github: "https://github.com/senator-dev",
      phone: "012 - 345 - 6789"
    },
    personalProfile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    workExperience: {
      titles: ["Job Title at Company (August 2022 - December 2023)", "Job Title 2 at Company 2 (August 2020 - December 2021)"],
      descriptions: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."]
    },
    keySkills: [
      "A Key skill", "A Key skill", "A Key skill",
      "A Key skill", "A Key skill", "A Key skill",
      "A Key skill", "A Key skill", "A Key skill"
    ],
    education: {
      institutions: ["New Jersey Institute of Technology", "New Jersey Institute of Technology"],
      degrees: ["BS in Computer Science", "MS in Data Science"],
      dates: ["2018 - 2022", "2022 - 2023"],
      gpas: ["3.9", "4.0"]
    }
  
  });


  return (
    <div id="container">
      <Header contactInfo={state.contactInfo}></Header>
      <PersonalProfile profile={state.personalProfile}></PersonalProfile>
      <WorkExperience workExperience={state.workExperience}></WorkExperience>
      <Skills keySkills={state.keySkills}></Skills>
      <Education education={state.education}></Education>
    </div>
  );
}
export default App;