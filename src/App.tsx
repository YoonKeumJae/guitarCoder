import ChordGenerator from "./utils/ChordGenerator";
import SVGrenderer from "./utils/SVGrenderer/SVGrenderer";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 10% 20%;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;
const Form = styled.form`
  display: flex;
  gap: 10px;
`;
const Input = styled.input`
  border-radius: 5px;
  border: 2px solid #5959d9;
  padding: 10px;
  :focus {
    outline: none;
  }
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
      <Form onSubmit={(e) => onSubmit(e)}>
        <Input
          type="text"
          placeholder="Input your code"
          onChange={(e) => setInputChord(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </Form>
      {chord && <SVGrenderer chord={chord} />}
    </Wrapper>
  );
}

export default App;
