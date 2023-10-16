import React, { useState } from 'react';
// import './AgeCalculator.css'; // Import the CSS file

function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    if (dob) {
      const dobDate = new Date(dob);
      const today = new Date();
      const ageDiff = today - dobDate;
      const ageDate = new Date(ageDiff);
      const years = ageDate.getUTCFullYear() - 1970;

      setAge(`You are ${years} years old`);
    } else {
      setAge('Please enter a valid date of birth.');
    }
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <h4>Enter your date of birth</h4>
      <div>
        <div>
          <input style={{height:'30px', width:'250px'}}
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div style={{marginTop:'10px'}}>
          <button style={{border:'none', backgroundColor:'#3897f0',borderRadius:'5px',color:'white',height:'30px', width:'125px'}}
            className="calculate-age-button" // Apply the CSS class
            onClick={calculateAge}
          >
            Calculate Age
          </button>
        </div>
      </div>
      {age && (
        <div>
          <p>{age}</p>
        </div>
      )}
    </div>
  );
}

export default AgeCalculator;
