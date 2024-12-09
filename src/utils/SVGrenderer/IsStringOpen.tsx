import styled from "styled-components";

const Circle = styled.circle``;
const Line = styled.line``;

interface IsStringOpenProps {
  openStrings: number[] | [];
  omitStrings: number[] | [];
  gap: number;
}

const IsStringOpen: React.FC<IsStringOpenProps> = ({
  openStrings,
  omitStrings,
  gap,
}) => {
  return (
    <g>
      {openStrings?.map((string: number, index: number) => {
        return (
          <Circle
            cx={50 + 40 * (6 - string)}
            cy={40 + gap}
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
          <g key={`omit${index}`}>
            <Line
              x1={40 + 40 * (6 - string)}
              y1={30 + gap}
              x2={60 + 40 * (6 - string)}
              y2={50 + gap}
              stroke="black"
              strokeWidth="2"
            />
            <Line
              x1={60 + 40 * (6 - string)}
              y1={30 + gap}
              x2={40 + 40 * (6 - string)}
              y2={50 + gap}
              stroke="black"
              strokeWidth="2"
            />
          </g>
        );
      })}
    </g>
  );
};

export default IsStringOpen;
