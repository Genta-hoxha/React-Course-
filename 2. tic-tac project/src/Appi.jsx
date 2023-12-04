import React from "react";

function Appi() {
  const [textArea, setTextArea] = React.useState("Awesome course!!!");
  const [input, setInput] = React.useState("Maximilian");

  const handleSave = () => {
    console.log("Feedback saved:", textArea, "Name:", input);
  };

  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label htmlFor="feedbackInput">Your Feedback</label>
          <textarea
            id="feedbackInput"
            value={textArea}
            onChange={(e) => setTextArea(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="nameInput">Your Name</label>
          <input
            type="text"
            id="nameInput"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={textArea} student={input} />

        <p>
          <button onClick={handleSave}>Save</button>
        </p>
      </section>
    </>
  );
}

const Review = ({ feedback, student }) => (
  <div>
    <p>Feedback: {feedback}</p>
    <p>Student: {student}</p>
  </div>
);

export default Appi;
