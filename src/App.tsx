import ChordGenerator from "./ChordGenerator";

function App() {
  const chordData = ChordGenerator("C");
  console.log(chordData);
  return (
    <>
      <h1>Guitar Chorder</h1>
    </>
  );
}

export default App;
