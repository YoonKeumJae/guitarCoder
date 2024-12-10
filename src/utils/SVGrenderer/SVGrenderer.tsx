import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import ImageDownloader from "./ImageDownloader";
import React from "react";
import Table from "./Table";
import IsStringOpen from "./IsStringOpen";
import FretNumber from "./FretNumber";

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;
const SvgWrapper = styled.div`
  padding: 20px;
  border: 4px solid #5959d9;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: white;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const Button = styled.button`
  padding: 10px;
  background-color: #5959d9;
  color: white;
  border: none;
  border-radius: 5px;
`;
const SVG = styled.svg``;
const Text = styled.text``;
const ViewPart = styled.div``;
const ControlPart = styled.div`
  padding: 20px;
  border: 4px solid #5959d9;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: white;
`;

interface SVGrendererProps {
  chord: Chord;
}

interface FormState {
  chordName: {
    name: string;
    size: number;
    color: string;
    gap: number;
  };
  chord: {
    color: string;
    fingerColor: string;
  }
  string: {
    view: boolean;
  };
  fretNumber: {
    view: boolean;
    size: number;
    color: string;
  };
}

const SVGrenderer: React.FC<SVGrendererProps> = ({ chord }) => {
  const [form, setForm] = useState<FormState>({
    chordName: {
      name: chord.name,
      size: 70,
      color: "#000000",
      gap: 40,
    },
    chord: {
      color: "#000000",
      fingerColor: "#000000",
    },
    string: {
      view: true,
    },
    fretNumber: {
      view: true,
      size: 50,
      color: "#000000",
    },
  });
  // 코드 정보에 따라 SVG 코드 생성
  const name: string = chord.name;
  const frets: Fret[] = chord.frets;
  const omitStrings: number[] = chord.omit_strings || [];
  const openStrings: number[] = chord.open_strings || [];

  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    console.log(form.chordName.gap);
  }, [form.chordName.gap]);

  const onClickSaveAsSVG = () => {
    const svgElement = svgRef.current;
    if (!svgElement) return;
    const serializer = new XMLSerializer();
    const svgData = serializer.serializeToString(svgElement);
    const blob = new Blob([svgData], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `GuitarChorder-${name}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onClickSaveAsPNG = () => {
    const svgElement = svgRef.current;
    if (!svgElement) return;
    ImageDownloader(svgElement, "png", name);
  };
  const onClickSaveAsJPG = () => {
    const svgElement = svgRef.current;
    if (!svgElement) return;
    ImageDownloader(svgElement, "jpg", name);
  };

  // TODO: width, height를 props로 받아와 상대적인 위치를 계산해 SVG 코드 생성
  const width: number = 300;
  const height: number = 320;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const [section, key] = name.split(".") as [keyof FormState, string];
    setForm((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: type === "checkbox" ? checked : value,
      },
    }));
  };

  return (
    <Wrapper>
      <ViewPart>
        <SvgWrapper>
          <SVG
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            ref={svgRef}
          >
            <Text
              x={width / 2} // 120
              y={height / 8} // 40
              fontFamily="HSSantokki-Regular"
              fontSize={form.chordName.size}
              fill={form.chordName.color}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {form.chordName.name}
            </Text>
            {form.string.view ? (
              <IsStringOpen
                openStrings={openStrings}
                omitStrings={omitStrings}
                gap={form.chordName.gap}
              />
            ) : null}
            {form.fretNumber.view ? (
              <FretNumber
                minFret={1}
                gap={form.chordName.gap}
                color={form.fretNumber.color}
                size={form.fretNumber.size}
              />
            ) : null}
            <Table frets={frets} gap={form.chordName.gap} color={form.chord.color} fingerColor={form.chord.fingerColor}/>
          </SVG>
        </SvgWrapper>
        <ButtonsWrapper>
          <Button onClick={onClickSaveAsSVG}>Save as SVG</Button>
          <Button onClick={onClickSaveAsPNG}>Save as PNG</Button>
          <Button onClick={onClickSaveAsJPG}>Save as JPG</Button>
        </ButtonsWrapper>
      </ViewPart>
      <ControlPart>
        <p>chord name</p>
        <input
          type="text"
          value={form.chordName.name}
          name="chordName.name"
          onChange={(e) => onChange(e)}
        />
        <p>chord name size</p>
        <input
          type="number"
          value={form.chordName.size}
          name="chordName.size"
          onChange={(e) => onChange(e)}
        />
        <p>chord name color</p>
        <input
          type="color"
          value={form.chordName.color}
          name="chordName.color"
          onChange={(e) => onChange(e)}
        />
        <p>chord name gap</p>
        <input
          type="number"
          name="chordName.gap"
          value={form.chordName.gap}
          onChange={(e) => onChange(e)}
        />
        <p>chord color</p>
        <input
          type="color"
          name="chord.color"
          value={form.chord.color}
          onChange={(e) => onChange(e)}
        />
        <p>chord finger's color</p>
        <input
          type="color"
          name="chord.fingerColor"
          value={form.chord.fingerColor}
          onChange={(e) => onChange(e)}
        />
        <p>show string's open</p>
        <input
          type="checkbox"
          name="string.view"
          checked={form.string.view}
          onChange={(e) => onChange(e)}
        />
        <p>view fret number</p>
        <input
          type="checkbox"
          name="fretNumber.view"
          checked={form.fretNumber.view}
          onChange={(e) => onChange(e)}
        />
        <p>fret number size</p>
        <input
          type="number"
          value={form.fretNumber.size}
          name="fretNumber.size"
          onChange={(e) => onChange(e)}
        />
        <p>fret number color</p>
        <input
          type="color"
          name="fretNumber.color"
          value={form.fretNumber.color}
          onChange={(e) => onChange(e)}
        />
      </ControlPart>
    </Wrapper>
  );
};

export default SVGrenderer;
