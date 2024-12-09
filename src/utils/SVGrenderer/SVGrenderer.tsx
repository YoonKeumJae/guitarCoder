import { useRef } from "react";
import styled from "styled-components";
import ImageDownloader from "./ImageDownloader";
import React from "react";
import Table from "./Table";
import IsStringOpen from "./IsStringOpen";
import FretNumber from "./FretNumber";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

interface SVGrendererProps {
  chord: Chord;
}

const SVGrenderer: React.FC<SVGrendererProps> = ({ chord }) => {
  // 코드 정보에 따라 SVG 코드 생성
  const name: string = chord.name;
  const frets: Fret[] = chord.frets;
  const omitStrings: number[] = chord.omit_strings || [];
  const openStrings: number[] = chord.open_strings || [];

  const svgRef = useRef<SVGSVGElement | null>(null);

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
  const chordNameSize: number = 70;
  const chordNameColor: string = "black";

  return (
    <Wrapper>
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
            fontFamily="Arial"
            fontSize={chordNameSize}
            fill={chordNameColor}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {name}
          </Text>
          <IsStringOpen
            openStrings={openStrings}
            omitStrings={omitStrings}
            gap={40}
          />
          <FretNumber minFret={1} gap={40} />
          <Table frets={frets} gap={40} />
        </SVG>
      </SvgWrapper>
      <ButtonsWrapper>
        <Button onClick={onClickSaveAsSVG}>Save as SVG</Button>
        <Button onClick={onClickSaveAsPNG}>Save as PNG</Button>
        <Button onClick={onClickSaveAsJPG}>Save as JPG</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default SVGrenderer;
