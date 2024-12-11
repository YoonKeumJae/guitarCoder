import styled from "styled-components";

const Line = styled.line``;
const Circle = styled.circle``;
const Rect = styled.rect``;

interface TableProps {
  frets: Fret[];
  gap: number;
  color: string;
  fingerColor: string;
}

const Table: React.FC<TableProps> = ({ frets, gap, color, fingerColor }) => {
  const ngap = Number(gap);
  return (
    <g width="100%">
      <Line
        x1="50"
        y1={60 + ngap}
        x2="50"
        y2={260 + ngap}
        stroke={color}
        strokeWidth="2"
      />
      <Line
        x1="90"
        y1={60 + ngap}
        x2="90"
        y2={260 + ngap}
        stroke={color}
        strokeWidth="2"
        />
      <Line
        x1="130"
        y1={60 + ngap}
        x2="130"
        y2={260 + ngap}
        stroke={color}
        strokeWidth="2"
        />
      <Line
        x1="170"
        y1={60 + ngap}
        x2="170"
        y2={260 + ngap}
        stroke={color}
        strokeWidth="2"
        />
      <Line
        x1="210"
        y1={60 + ngap}
        x2="210"
        y2={260 + ngap}
        stroke={color}
        strokeWidth="2"
        />
      <Line
        x1="250"
        y1={60 + ngap}
        x2="250"
        y2={260 + ngap}
        stroke={color}
        strokeWidth="2"
        />
      {/* <!--0번--> */}
      <Line
        x1="49"
        y1={60 + ngap}
        x2="251"
        y2={60 + ngap}
        stroke={color}
        strokeWidth="5"
        />
      {/* <!--프렛--> */}
      <Line
        x1="50"
        y1={60 + ngap}
        x2="250"
        y2={60 + ngap}
        stroke={color}
        strokeWidth="1"
        />
      <Line
        x1="50"
        y1={110 + ngap}
        x2="250"
        y2={110 + ngap}
        stroke={color}
        strokeWidth="1"
        />
      <Line
        x1="50"
        y1={160 + ngap}
        x2="250"
        y2={160 + ngap}
        stroke={color}
        strokeWidth="1"
        />
      <Line
        x1="50"
        y1={210 + ngap}
        x2="250"
        y2={210 + ngap}
        stroke={color}
        strokeWidth="1"
        />
      <Line
        x1="50"
        y1={260 + ngap}
        x2="250"
        y2={260 + ngap}
        stroke={color}
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
          <g>
            
            <Circle
              cx={50 + 40 * (6 - string)}
              cy={85 + ngap + 50 * (fretNumber - 1)}
              r="15"
              fill={fingerColor}
              key={`fret-circle-${index}`}
            />
            {to_barre !== undefined && from_barre !== undefined && (
              <Rect
                x={35 + 40 * (6 - from_barre)}
                y={70 + ngap + 50 * (fretNumber - 1)}
                width={70 + 40 * (barre_length - 2)}
                height="30"
                rx="15"
                fill={fingerColor}
              />
            )}
          </g>
        );
      })}
    </g>
  );
};
export default Table;
