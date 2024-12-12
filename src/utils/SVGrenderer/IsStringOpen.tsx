import styled from "styled-components";
import { ChordController } from "../ChordViewr";

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
  const xlocation = controller.fretNumber.gap * 2 + controller.fretNumber.size;
  const ylocation =
    controller.chordTitle.height +
    controller.chordTitle.size +
    controller.string.gap;
  const cellWidth = controller.body.cellWidth;
  const shapeSize = controller.string.size / 2;

  return (
    <g>
      {openStrings?.map((string: number, index: number) => {
        return (
          <Circle
            cx={xlocation + cellWidth * (6 - string)}
            cy={ylocation + Number(controller.string.gap)}
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
              y1={ylocation + shapeSize + Number(controller.string.gap)}
              x2={xlocation + shapeSize + cellWidth * (6 - string)}
              y2={ylocation - shapeSize + Number(controller.string.gap)}
              stroke={controller.string.color}
              strokeWidth="2"
            />
            <Line
              x1={xlocation + shapeSize + cellWidth * (6 - string)}
              y1={ylocation + shapeSize + Number(controller.string.gap)}
              x2={xlocation - shapeSize + cellWidth * (6 - string)}
              y2={ylocation - shapeSize + Number(controller.string.gap)}
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
