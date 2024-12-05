import ChordGenerator from "./utils/ChordGenerator";
import SVGrenderer from "./utils/SVGrenderer/SVGrenderer";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;
const Form = styled.form`
  display: flex;
  gap: 10px;
`;
const Button = styled.button`
  padding: 10px;
  background-color: #5959d9;
  color: white;
  border: none;
  border-radius: 5px;
`;

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
    <Wrapper>
      <Title>Guitar Chorder</Title>
      <p>Input your code: </p>
      <Form onSubmit={(e) => onSubmit(e)}>
        <input type="text" onChange={(e) => setInputChord(e.target.value)} />
        <Button type="submit">Submit</Button>
      </Form>
      {chord && <SVGrenderer chord={chord} />}
    </Wrapper>
  );
}

export default App;
