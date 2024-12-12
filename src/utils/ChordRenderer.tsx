import styled from "styled-components";
import { ChordController } from "./ChordViewr";
import IsStringOpen from "./SVGrenderer/IsStringOpen";
import FretNumber from "./SVGrenderer/FretNumber";
import ChordTable from "./ChordTable";
import ChordLocation from "./ChordLocation";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 4px solid #5959d9;
  border-radius: 10px;
`;
interface SVGProps {
  backgroundcolor: string;
}

const SVG = styled.svg<SVGProps>`
  background-color: ${(props) => props.backgroundcolor};
`;

interface ChordRendererProps {
  controller: ChordController;
  data: Chord;
}

const ChordRenderer: React.FC<ChordRendererProps> = ({ controller, data }) => {
  const gWidth =
    controller.chord.chordX +
    // controller.fretNumber.gap * 2 +
    controller.body.cellWidth * 6 +
    controller.string.size;
  return (
    <Wrapper>
      <SVG
        width={controller.body.fullWidth}
        height={controller.body.fullHeight}
        xmlns="http://www.w3.org/2000/svg"
        backgroundcolor={controller.body.backgroundColor}
      >
        <text
          x={controller.body.fullWidth / 2}
          y={controller.chordTitle.chordTitleY}
          fontSize={controller.chordTitle.size}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={controller.chordTitle.color}
        >
          {data.chordInfo.name}
        </text>
        {/* g 태그 내부를 fullWidth 가로 기준 중앙 정렬하도록 */}
        <FretNumber
          startFret={data.renderingInfo.startingFret}
          controller={controller}
        />
        <g
          transform={`translate(${
            (controller.body.fullWidth - gWidth) / 2
          }, 0)`}
        >
          {controller.string.view ? (
            <IsStringOpen
              openStrings={data.stringInfo.openStrings ?? null}
              omitStrings={data.stringInfo.omitStrings ?? null}
              controller={controller}
            />
          ) : null}
          <ChordTable controller={controller} />
          <ChordLocation
            controller={controller}
            frets={data.chordInfo.frets}
            starting={data.renderingInfo.startingFret}
          />
        </g>
      </SVG>
    </Wrapper>
  );
};

export default ChordRenderer;
