import ChordGenerator from "./utils/ChordGenerator";
import SVGrenderer from "./utils/SVGrenderer/SVGrenderer";
import { useState } from "react";

function App() {
  const [inputChord, setInputChord] = useState<string>("");
  const [chord, setChord] = useState<Chord | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = ChordGenerator(inputChord);
      setChord(res);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      <h1>Guitar Chorder</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <p>Input your code: </p>
        <input type="text" onChange={(e) => setInputChord(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <h4>Your code is: {JSON.stringify(chord)}</h4>
      {chord && <SVGrenderer chord={chord} />}
    </>
  );
}

export default App;
