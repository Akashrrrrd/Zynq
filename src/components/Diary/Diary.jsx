import React, { useState } from "react";
import "./Diary.css";

const Diary = () => {
  const [entries, setEntries] = useState([]);
  const [mood, setMood] = useState("");
  const [newEntry, setNewEntry] = useState("");

  const handleAddEntry = () => {
    if (newEntry.trim()) {
      const entry = {
        id: Date.now(),
        text: newEntry,
        mood: mood || "Neutral",
        date: new Date().toLocaleString(),
      };
      setEntries([entry, ...entries]);
      setNewEntry("");
      setMood("");
    }
  };

  return (
    <div className="dy-diary-container">
      <div className="dy-diary-header">
        <h1>Thought Diary</h1>
        <p>Track your thoughts, emotions, and growth.</p>
      </div>

      <div className="dy-diary-input-section">
        <textarea
          className="dy-diary-input"
          placeholder="Write your thoughts here..."
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
        />
        <div className="dy-diary-controls">
          <select
            className="dy-diary-mood-selector"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          >
            <option value="">Select Mood</option>
            <option value="Happy">Happy 😊</option>
            <option value="Sad">Sad 😔</option>
            <option value="Excited">Excited 😄</option>
            <option value="Stressed">Stressed 😟</option>
            <option value="Neutral">Neutral 😐</option>
          </select>
          <button className="dy-diary-add-button" onClick={handleAddEntry}>
            Add Entry
          </button>
        </div>
      </div>

      <div className="dy-diary-entries">
        {entries.length === 0 ? (
          <p className="dy-diary-no-entries">No entries yet. Start writing!</p>
        ) : (
          entries.map((entry) => (
            <div className="dy-diary-entry" key={entry.id}>
              <div className="dy-diary-entry-header">
                <span className="dy-diary-mood">Mood: {entry.mood}</span>
                <span className="dy-diary-date">{entry.date}</span>
              </div>
              <p className="dy-diary-text">{entry.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Diary;
