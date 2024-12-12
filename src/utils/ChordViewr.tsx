import styled from "styled-components";
import { useState } from "react";
import ChordRenderer from "./ChordRenderer";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
const SideBox = styled.div`
  width: 500px;
  height: 500px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #5959d9;
  border-radius: 10px;
  background-color: #ffffff;
`;

interface ChordViewrProps {
  chord: Chord;
}
export interface ChordController {
  body: {
    fullWidth: number;
    fullHeight: number;
    cellWidth: number;
    cellHeight: number;
    color: string;
    viewFrets: number; // 몇 개의 프렛을 보여줄 것인가?
  };
  chordTitle: {
    description: string;
    size: number;
    color: string;
    height: number;
    gap: number;
  };
  string: {
    view: boolean;
    color: string;
    gap: number;
    size: number;
  };
  fretNumber: {
    view: boolean;
    color: string;
    size: number;
    gap: number;
  };
  chord: {
    color: string;
    size: number;
    withFinger: boolean;
    gap: number;
  };
}
const ChordViewr: React.FC<ChordViewrProps> = ({ chord }) => {
  const [form, setForm] = useState<ChordController>({
    body: {
      fullWidth: 300,
      fullHeight: 400,
      cellWidth: 40,
      cellHeight: 50,
      color: "#000000",
      viewFrets: 3, // 몇 개의 프렛을 보여줄 것인가?
    },
    chordTitle: {
      description: "",
      size: 40,
      color: "#000000",
      height: 50,
      gap: 30,
    },
    string: {
      view: true,
      color: "#000000",
      gap: 10,
      size: 30,
    },
    fretNumber: {
      view: true,
      color: "#000000",
      size: 30,
      gap: 20,
    },
    chord: {
      color: "#000000",
      size: 10,
      withFinger: true,
      gap: 10,
    },
  });

  return (
    <Wrapper>
      <SideBox>
        <ChordRenderer controller={form} data={chord} />
      </SideBox>
      <SideBox>
        <input
          type="number"
          value={form.body.fullWidth}
          onChange={(e) =>
            setForm({
              ...form,
              body: { ...form.body, fullWidth: Number(e.target.value) },
            })
          }
        />
        <input
          type="number"
          value={form.body.fullHeight}
          onChange={(e) =>
            setForm({
              ...form,
              body: { ...form.body, fullHeight: Number(e.target.value) },
            })
          }
        />
        <input
          type="number"
          value={form.body.cellHeight}
          onChange={(e) =>
            setForm({
              ...form,
              body: {
                ...form.body,
                cellHeight: Number(e.target.value),
              },
            })
          }
        />
      </SideBox>
    </Wrapper>
  );
};

export default ChordViewr;
