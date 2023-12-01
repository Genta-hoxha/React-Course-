import { useState } from "react";
// import Review from "./components/Review";
function Appi() {
  const [showFeedback, setShowFeedback] = useState(false);
  function handleChange() {
    console.log("genta");
  }

  function addFeedback() {
    setShowFeedback(true);
  }
  return (
    <main>
      {" "}
      <section id="feedback">
        <h2>Please share some feedback</h2> <label>YOUR FEEDBACK</label>
        <input type="text" placeholder="Awesome course!!!"></input>
        <label>YOUR NAME</label>
        <input type="text" placeholder="Maximilian"></input>
      </section>
      <h2>Your feedback</h2>
      {showFeedback && (
        <section id="draft">
          <input type="text" placeholder="Maximilian"></input>
          <p>Maximilian</p>
          <button onClick={addFeedback}>Save</button>
        </section>
      )}
    </main>
  );
}
export default Appi;
