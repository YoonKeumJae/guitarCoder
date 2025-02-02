import styled from "styled-components";
import { ChordController } from "./ChordViewer";

const Circle = styled.circle``;
const Line = styled.line``;

interface IsStringOpenProps {
  openStrings: number[] | null;
  omitStrings: number[] | null;
  controller: ChordController;
}

const IsStringOpen: React.FC<IsStringOpenProps> = ({
  openStrings,
  omitStrings,
  controller,
}) => {
  const cellWidth = controller.body.cellWidth;
  const shapeSize = controller.string.size / 2;
  const xlocation = controller.chord.chordX;

  return (
    <g>
      {openStrings?.map((string: number, index: number) => {
        return (
          <Circle
            cx={xlocation + cellWidth * (6 - string)}
            cy={Number(controller.string.stringY) + shapeSize}
            r={shapeSize}
            fill="none"
            stroke={controller.string.color}
            strokeWidth="2"
            dominantBaseline="middle"
            key={`open-string-${index}`}
          />
        );
      })}
      {/* omit string */}
      {omitStrings?.map((string: number, index: number) => {
        return (
          <g key={`omit${index}`}>
            <Line
              x1={xlocation - shapeSize + cellWidth * (6 - string)}
              y1={shapeSize * 2 + Number(controller.string.stringY)}
              x2={xlocation + shapeSize + cellWidth * (6 - string)}
              y2={Number(controller.string.stringY)}
              stroke={controller.string.color}
              strokeWidth="2"
            />
            <Line
              x1={xlocation + shapeSize + cellWidth * (6 - string)}
              y1={2 * shapeSize + Number(controller.string.stringY)}
              x2={xlocation - shapeSize + cellWidth * (6 - string)}
              y2={Number(controller.string.stringY)}
              stroke={controller.string.color}
              strokeWidth="2"
            />
          </g>
        );
      })}
    </g>
  );
};

export default IsStringOpen;
