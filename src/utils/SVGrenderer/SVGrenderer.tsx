import { useRef } from "react";
import styled from "styled-components";
import ImageDownloader from "./ImageDownloader";
import React from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SvgWrapper = styled.div`
  padding: 20px 0;
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

  return (
    <Wrapper>
      <SvgWrapper>
        <svg
          width="240"
          height="310"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
        >
          <text
            x="120"
            y="40"
            fontFamily="Arial"
            fontSize="40"
            fill="black"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {name}
          </text>
          {/* empty string */}
          {openStrings?.map((string: number, index: number) => {
            return (
              <circle
                cx={20 + 40 * (6 - string)}
                cy="80"
                r="10"
                fill="none"
                stroke="black"
                strokeWidth="2"
                dominantBaseline="middle"
                key={`open-string-${index}`}
              />
            );
          })}
          {/* omit string */}
          {omitStrings?.map((string: number, index: number) => {
            return (
              <React.Fragment key={`omit${index}`}>
                <line
                  x1={10 + 40 * (6 - string)}
                  y1="70"
                  x2={30 + 40 * (6 - string)}
                  y2="90"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1={30 + 40 * (6 - string)}
                  y1="70"
                  x2={10 + 40 * (6 - string)}
                  y2="90"
                  stroke="black"
                  strokeWidth="2"
                />
              </React.Fragment>
            );
          })}
          {/* <!--줄--> */}
          <line
            x1="20"
            y1="100"
            x2="20"
            y2="300"
            stroke="black"
            strokeWidth="2"
          />
          <line
            x1="60"
            y1="100"
            x2="60"
            y2="300"
            stroke="black"
            strokeWidth="2"
          />
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="300"
            stroke="black"
            strokeWidth="2"
          />
          <line
            x1="140"
            y1="100"
            x2="140"
            y2="300"
            stroke="black"
            strokeWidth="2"
          />
          <line
            x1="180"
            y1="100"
            x2="180"
            y2="300"
            stroke="black"
            strokeWidth="2"
          />
          <line
            x1="220"
            y1="100"
            x2="220"
            y2="300"
            stroke="black"
            strokeWidth="2"
          />
          {/* <!--0번--> */}
          <line
            x1="19"
            y1="100"
            x2="221"
            y2="100"
            stroke="black"
            strokeWidth="5"
          />
          {/* <!--프렛--> */}
          <line
            x1="20"
            y1="100"
            x2="220"
            y2="100"
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1="20"
            y1="150"
            x2="220"
            y2="150"
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1="20"
            y1="200"
            x2="220"
            y2="200"
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1="20"
            y1="250"
            x2="220"
            y2="250"
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1="20"
            y1="300"
            x2="220"
            y2="300"
            stroke="black"
            strokeWidth="1"
          />
          {/* <!--손가락 번호--> */}
          {frets.map((fret: Fret, index: number) => {
            const string: number = fret.string;
            const fretNumber: number = fret.fret;
            const to_barre = fret.barre?.to_string;
            const from_barre = fret.barre?.from_string;
            const barre_length =
              to_barre && from_barre ? from_barre - to_barre + 1 : 0;

            return (
              <React.Fragment>
                <circle
                  cx={20 + 40 * (6 - string)}
                  cy={125 + 50 * (fretNumber - 1)}
                  r="15"
                  fill="black"
                  key={`fret-circle-${index}`}
                />
                {to_barre !== undefined && from_barre !== undefined && (
                  <rect
                    x={5 + 40 * (6 - from_barre)}
                    y={110 + 50 * (fretNumber - 1)}
                    width={70 + 40 * (barre_length - 2)}
                    height="30"
                    rx="15"
                  />
                )}
              </React.Fragment>
            );
          })}
        </svg>
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
