interface FretNumberProps {
  minFret: number;
  gap: number;
}

const FretNumber: React.FC<FretNumberProps> = ({ minFret, gap }) => {
  return (
    <g>
      {/* 프랫 수를 나타내는 숫자 */}
      <text
        fontSize="30"
        x="15"
        y={85 + gap}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {minFret}
      </text>
      <text
        fontSize="30"
        x="15"
        y={85 + gap + 50}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {minFret + 1}
      </text>
      <text
        fontSize="30"
        x="15"
        y={85 + gap + 100}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {minFret + 2}
      </text>
      <text
        fontSize="30"
        x="15"
        y={85 + gap + 150}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {minFret + 3}
      </text>
    </g>
  );
};

export default FretNumber;
