import React, { useState } from 'react';

const WordCounter = () => {
  const [wordCount, setWordCount] = useState(0);

  const handleInput = (e) => {
    let text = e.target.value;
    text = text.trim();
    if (text === '') {
      setWordCount(0);
    } else {
      let words = text.match(/\S+/g);
      setWordCount(words ? words.length : 0);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Responsive Paragraph Word Counter</h1>
      <div
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '20px',
        }}
      >
        <textarea
          id="text"
          placeholder="Type something here..."
          style={{
            width: '100%',
            height: '100px',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            resize: 'none',
          }}
          onChange={handleInput}
        ></textarea>
        <p className="counter" style={{ color: '#888' }}>
          <strong>Word Count:</strong> <span id="count">{wordCount}</span>
        </p>
      </div>
    </div>
  );
};

export default WordCounter;
