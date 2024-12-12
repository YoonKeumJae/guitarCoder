import styled from "styled-components";
import { ChordController } from "./ChordViewr";
import IsStringOpen from "./SVGrenderer/IsStringOpen";
import FretNumber from "./SVGrenderer/FretNumber";
import ChordTable from "./ChordTable";
import ChordLocation from "./ChordLocation";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

interface ChordRendererProps {
  controller: ChordController;
  data: Chord;
}

const ChordRenderer: React.FC<ChordRendererProps> = ({ controller, data }) => {
  return (
    // <svg
    //   width={controller.body.fullWidth}
    //   height={controller.body.fullHeight}
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <text
    //     x={controller.body.fullWidth / 2}
    //     y={controller.chordTitle.height}
    //     fontSize={controller.chordTitle.size}
    //     textAnchor="middle"
    //     dominantBaseline="middle"
    //     fill={controller.chordTitle.color}
    //   >
    //     {data.chordInfo.name}
    //   </text>
    //   {controller.string.view ? (
    //     <IsStringOpen
    //       openStrings={data.stringInfo.openStrings ?? null}
    //       omitStrings={data.stringInfo.omitStrings ?? null}
    //       gap={controller.chordTitle.gap}
    //     />
    //   ) : null}
    // </svg>
    <Wrapper>
      <svg
        width={controller.body.fullWidth}
        height={controller.body.fullHeight}
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x={controller.body.fullWidth / 2}
          y={controller.chordTitle.height}
          fontSize={controller.chordTitle.size}
        >
          {data.chordInfo.name}
        </text>
        <IsStringOpen
          openStrings={data.stringInfo.openStrings ?? null}
          omitStrings={data.stringInfo.omitStrings ?? null}
          controller={controller}
        />
        <FretNumber
          startFret={data.renderingInfo.startingFret}
          controller={controller}
        />
        <ChordTable controller={controller} />
        <ChordLocation
          controller={controller}
          frets={data.chordInfo.frets}
          starting={data.renderingInfo.startingFret} />
      </svg>
    </Wrapper>
  );
};

export default ChordRenderer;
