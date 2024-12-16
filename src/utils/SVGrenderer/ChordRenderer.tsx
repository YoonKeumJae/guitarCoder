import styled from "styled-components";
import { ChordController } from "./ChordViewer";
import IsStringOpen from "./IsStringOpen";
import FretNumber from "./FretNumber";
import ChordTable from "./ChordTable";
import ChordLocation from "./ChordLocation";
import { forwardRef } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 4px solid #5959d9;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;
interface ChordRendererProps {
  controller: ChordController;
  data: Chord;
  ref: React.RefObject<SVGSVGElement>;
}

const ChordRenderer = forwardRef<SVGSVGElement, ChordRendererProps>(
  ({ controller, data }, ref) => {
    return (
      <Wrapper>
        <svg
          width={controller.body.fullWidth}
          height={controller.body.fullHeight}
          xmlns="http://www.w3.org/2000/svg"
          ref={ref}
          style={{
            backgroundColor: controller.body.backgroundColor,
            fontFamily: "Quicksand",
          }}
        >
          <rect
            width="100%"
            height="100%"
            fill={controller.body.backgroundColor}
          />
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
          <FretNumber
            startFret={data.renderingInfo.startingFret}
            controller={controller}
          />

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
        </svg>
      </Wrapper>
    );
  }
);

export default ChordRenderer;
