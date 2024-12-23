import ChordGenerator from "./utils/SVGrenderer/ChordGenerator";
import { useState } from "react";
import styled from "styled-components";
import Footer from "./components/Footer";

import ChordViewr from "./utils/SVGrenderer/ChordViewer";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 50px 70px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  overflow-y: scroll;
`;
const Title = styled.div`
  font-size: 5rem;
  font-weight: bold;
`;
const Form = styled.form`
  display: flex;
  gap: 10px;
  font-size: 1.5rem;
`;
const Input = styled.input`
  border-radius: 5px;
  border: 2px solid #5959d9;
  font-size: 1.5rem;
  padding: 10px;
  :focus {
    outline: none;
  }
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  outline: none;
  &:hover {
    box-shadow: -2px -2px 4px rgba(0, 0, 0, 0.5);
  }
`;
const Button = styled.button`
  font-size: 1.5rem;
  padding: 10px;
  background-color: #5959d9;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  &:hover {
    box-shadow: -2px -2px 4px rgba(0, 0, 0, 0.5);
  }
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
      {chord && <ChordViewr chord={chord} />}
      <hr style={{ border: "1px solid #d6d6d6", width: "100%" }} />
      <Footer />
    </Wrapper>
  );
}

export default App;
