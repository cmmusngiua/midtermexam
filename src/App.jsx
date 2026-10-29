import { useState } from 'react';
import './App.css';

function App() {
  // Replace these with your actual details
  const STUDENT_NAME ="CRANE MARY MUSNGI";
  const SECTION = "WMB-3A";
  const SUBJECT_CODE = "C-PCIT9";

  const [displayText, setDisplayText] = useState("10 Things That Require Zero Talent");

  const items = [
    { label: "1", text: "Being On Time" },
    { label: "2", text: "Making An Effort" },
    { label: "3", text: "Being High Energy" },
    { label: "4", text: "Having A Positive Attitude" },
    { label: "5", text: "Being Passionate" },
    { label: "6", text: "Using Good Body Language" },
    { label: "7", text: "Being Coachable" },
    { label: "8", text: "Doing A Little Extra" },
    { label: "9", text: "Being Prepared" },
    { label: "0", text: "Having A Strong Work Ethic" },
    { label: "NAME", text: STUDENT_NAME.toUpperCase() },
    { label: "SUBJ", text: SUBJECT_CODE.toUpperCase() },
  ];

  const handleReset = () => {
    setDisplayText("10 Things That Require Zero Talent");
  };

  return (
    <div className="app-wrapper">
      <div className="calculator-card">
        {/* Requirement A: Student Name & Section */}
        <header className="header">
          <span className="student-info">{STUDENT_NAME} • {SECTION}</span>
        </header>

        {/* Requirement B & C: Main Display Screen */}
        <div className="display-screen" onClick={handleReset} title="Click to reset">
          <p className="display-text">{displayText}</p>
        </div>

        {/* Keypad Grid */}
        <div className="keypad-grid">
          {items.map((item) => (
            <button
              key={item.label}
              className={`key-btn ${isNaN(item.label) ? 'action-btn' : ''}`}
              onClick={() => setDisplayText(item.text)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;