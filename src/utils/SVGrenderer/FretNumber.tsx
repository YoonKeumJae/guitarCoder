interface FretNumberProps {
  minFret: number;
  gap: number;
  color: string;
  size: number;
}

const FretNumber: React.FC<FretNumberProps> = ({ minFret, gap, color, size }) => {
  const ngap = Number(gap);
  return (
    <g>
      {/* 프랫 수를 나타내는 숫자 */}
      <text
        fontSize={size}
        x="15"
        y={85 + ngap}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={color}
      >
        {minFret}
      </text>
      <text
        fontSize={size}
        x="15"
        y={85 + ngap + 50}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={color}
      >
        {minFret + 1}
      </text>
      <text
        fontSize={size}
        x="15"
        y={85 + ngap + 100}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={color}
      >
        {minFret + 2}
      </text>
      <text
        fontSize={size}
        x="15"
        y={85 + ngap + 150}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={color}
      >
        {minFret + 3}
      </text>
    </g>
  );
};

export default FretNumber;
