import styled from "styled-components";
import { useRef, useState } from "react";
import ChordRenderer from "../SVGrenderer/ChordRenderer";
import FormContainer from "../../components/FormContainer";
import ImageDownloader from "./ImageDownloader";

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 4px solid #5959d9;
  border-radius: 10px;
  background-color: #ffffff;
  overflow: auto;
`;

const FormWrapper = styled(SideBox)`
  justify-content: flex-start;
`;

const Button = styled.button``;
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
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
    backgroundColor: string;
  };
  chordTitle: {
    description: string;
    size: number;
    color: string;
    chordTitleY: number;
  };
  string: {
    view: boolean;
    color: string;
    stringY: number;
    size: number;
  };
  fretNumber: {
    view: boolean;
    color: string;
    size: number;
    fretNumberX: number;
  };
  chord: {
    color: string;
    size: number;
    withFinger: boolean;
    chordY: number;
    chordX: number;
  };
}
const ChordViewr: React.FC<ChordViewrProps> = ({ chord }) => {
  const [form, setForm] = useState<ChordController>({
    body: {
      fullWidth: 300,
      fullHeight: 340,
      cellWidth: 40,
      cellHeight: 50,
      color: "#000000",
      viewFrets: 3, // 몇 개의 프렛을 보여줄 것인가?
      backgroundColor: "#ffffff",
    },
    chordTitle: {
      description: "",
      size: 70,
      color: "#000000",
      chordTitleY: 65,
    },
    string: {
      view: true,
      color: "#000000",
      stringY: 120,
      size: 20,
    },
    fretNumber: {
      view: true,
      color: "#000000",
      size: 30,
      fretNumberX: 20,
    },
    chord: {
      color: "#000000",
      size: 14,
      withFinger: true,
      chordY: 150,
      chordX: 55,
    },
  });
  const svgRef = useRef<SVGSVGElement>(null);

  const onClickSaveAsSVG = () => {
    const svgElement = svgRef.current;
    if (!svgElement) return;
    const serializer = new XMLSerializer();
    const svgData = serializer.serializeToString(svgElement);
    const blob = new Blob([svgData], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `GuitarChorder-${chord.chordInfo.name}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const onClickSaveAsPNG = () => {
    const svgElement = svgRef.current;
    if (!svgElement) return;
    ImageDownloader(svgElement, "png", chord.chordInfo.name);
  };
  const onClickSaveAsJPG = () => {
    const svgElement = svgRef.current;
    if (!svgElement) return;
    ImageDownloader(svgElement, "jpg", chord.chordInfo.name);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const [category, key] = name.split(".");
    setForm((prevForm) => ({
      ...prevForm,
      [category]: {
        ...prevForm[category as keyof ChordController],
        [key]:
          type === "checkbox"
            ? checked
            : type === "number"
            ? Number(value)
            : value,
      },
    }));
  };

  return (
    <Wrapper>
      <SideBox>
        <ChordRenderer controller={form} data={chord} ref={svgRef} />
        <ButtonsWrapper>
          <Button onClick={onClickSaveAsSVG}>SVG</Button>
          <Button onClick={onClickSaveAsPNG}>PNG</Button>
          <Button onClick={onClickSaveAsJPG}>JPG</Button>
        </ButtonsWrapper>
      </SideBox>
      <FormWrapper>
        <FormContainer>
          <p>SVG background color</p>
          <input
            type="color"
            value={form.body.backgroundColor}
            name="body.backgroundColor"
            onChange={onChange}
          />
        </FormContainer>
        <FormContainer>
          <p>SVG Full Width</p>
          <input
            type="number"
            value={form.body.fullWidth}
            name="body.fullWidth"
            onChange={onChange}
          />
        </FormContainer>
        <FormContainer>
          <p>SVG Full Height</p>
          <input
            type="number"
            value={form.body.fullHeight}
            name="body.fullHeight"
            onChange={onChange}
          />
        </FormContainer>
        <FormContainer>
          <p>SVG Cell Width</p>
          <input
            type="number"
            value={form.body.cellWidth}
            name="body.cellWidth"
            onChange={onChange}
          />
        </FormContainer>
        <FormContainer>
          <p>SVG Cell Height</p>
          <input
            type="number"
            value={form.body.cellHeight}
            name="body.cellHeight"
            onChange={onChange}
          />
        </FormContainer>
        <FormContainer>
          <p>Table color</p>
          <input
            type="color"
            value={form.body.color}
            name="body.color"
            onChange={onChange}
          />
        </FormContainer>
        <FormContainer>
          <p>Number of frets</p>
          <input
            type="number"
            value={form.body.viewFrets}
            name="body.viewFrets"
            onChange={onChange}
          />
        </FormContainer>
        <hr />
        <FormContainer>
          <p>Chord Title size</p>
          <input
            type="number"
            value={form.chordTitle.size}
            name="chordTitle.size"
            onChange={onChange}
          />
        </FormContainer>
        <FormContainer>
          <p>Chord Title color</p>
          <input
            type="color"
            value={form.chordTitle.color}
            name="chordTitle.color"
            onChange={onChange}
          />
        </FormContainer>
        <FormContainer>
          <p>Chord Title y loction</p>
          <input
            type="number"
            value={form.chordTitle.chordTitleY}
            name="chordTitle.chordTitleY"
            onChange={onChange}
          />
        </FormContainer>
        <hr />
        <FormContainer>
          <p>Show string</p>
          <input
            type="checkbox"
            checked={form.string.view}
            name="string.view"
            onChange={onChange}
          />
        </FormContainer>
        <FormContainer>
          <p>String color</p>
          <input
            type="color"
            value={form.string.color}
            name="string.color"
            onChange={onChange}
          />
        </FormContainer>
        <FormContainer>
          <p>String size</p>
          <input
            type="number"
            value={form.string.size}
            name="string.size"
            onChange={onChange}
          />
        </FormContainer>
        <FormContainer>
          <p>String height</p>
          <input
            type="number"
            value={form.string.stringY}
            name="string.stringY"
            onChange={onChange}
          />
        </FormContainer>
        <hr />
        <FormContainer>
          <p>Show fret number</p>
          <input
            type="checkbox"
            checked={form.fretNumber.view}
            name="fretNumber.view"
            onChange={onChange}
          />
        </FormContainer>
        <FormContainer>
          <p>Fret number color</p>
          <input
            type="color"
            value={form.fretNumber.color}
            name="fretNumber.color"
            onChange={onChange}
          />
        </FormContainer>
        <FormContainer>
          <p>Fret number size</p>
          <input
            type="number"
            value={form.fretNumber.size}
            name="fretNumber.size"
            onChange={onChange}
          />
        </FormContainer>
        <FormContainer>
          <p>Fret number X</p>
          <input
            type="number"
            value={form.fretNumber.fretNumberX}
            name="fretNumber.fretNumberX"
            onChange={onChange}
          />
        </FormContainer>
        <FormContainer>
          <p>Chord color</p>
          <input
            type="color"
            value={form.chord.color}
            name="chord.color"
            onChange={onChange}
          />
        </FormContainer>
        <FormContainer>
          <p>Chord size</p>
          <input
            type="number"
            value={form.chord.size}
            name="chord.size"
            onChange={onChange}
          />
        </FormContainer>
        <FormContainer>
          <p>Chord X</p>
          <input
            type="number"
            value={form.chord.chordX}
            name="chord.chordX"
            onChange={onChange}
          />
        </FormContainer>
        <FormContainer>
          <p>Chord Y</p>
          <input
            type="number"
            value={form.chord.chordY}
            name="chord.chordY"
            onChange={onChange}
          />
        </FormContainer>
        <FormContainer>
          <p>Show finger number</p>
          <input
            type="checkbox"
            checked={form.chord.withFinger}
            name="chord.withFinger"
            onChange={onChange}
          />
        </FormContainer>
      </FormWrapper>
    </Wrapper>
  );
};

export default ChordViewr;
