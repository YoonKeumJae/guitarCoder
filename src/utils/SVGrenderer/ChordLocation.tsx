import { ChordController } from "./ChordViewr";

interface ChordLocationProps {
  controller: ChordController;
  frets: Fret[];
  starting: number;
}

const ChordLocation: React.FC<ChordLocationProps> = ({
  controller,
  frets,
  starting,
}) => {
  const xlocation = controller.chord.chordX;
  const ylocation = controller.chord.chordY;

  return (
    <g>
      {frets.map((fret, index) => {
        const to_barre = fret.barre?.to_string;
        const from_barre = fret.barre?.from_string;
        const barre_length =
          to_barre && from_barre ? from_barre - to_barre + 1 : 0;
        const min = fret.fret - starting;
        return (
          <g key={`chord-${index}`}>
            {/* 손가락 번호 표시를 투명하게 하고 싶을 경우에는 아래 코드를 주석 해제한다. 
            단, Table.tsx의 코드 또한 마스킹 처리 되도록 수정해야 한다.  */}
            {/* <defs>
              <mask id={`mask-${index}-${fret.finger}`}>
                <circle
                  cx={xlocation + controller.body.cellWidth * (6 - fret.string)}
                  cy={
                    ylocation +
                    controller.body.cellHeight * min +
                    controller.body.cellHeight / 2
                  }
                  r={controller.chord.size}
                  fill="white"
                />
                <text
                  x={xlocation + controller.body.cellWidth * (6 - fret.string)}
                  y={
                    ylocation +
                    controller.body.cellHeight * min +
                    controller.body.cellHeight / 2
                  }
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={controller.chord.size}
                  fontWeight="bold"
                  fill="black"
                >
                  {fret.finger}
                </text>
              </mask>
            </defs> */}
            <circle
              cx={xlocation + controller.body.cellWidth * (6 - fret.string)}
              cy={
                ylocation +
                controller.body.cellHeight * min +
                controller.body.cellHeight / 2
              }
              r={controller.chord.size}
              fill={controller.chord.color}
              mask={
                controller.chord.withFinger
                  ? `url(#mask-${index}-${fret.finger})`
                  : undefined
              }
            />
            {controller.chord.withFinger && (
              <text
                x={xlocation + controller.body.cellWidth * (6 - fret.string)}
                y={
                  ylocation +
                  controller.body.cellHeight * min +
                  controller.body.cellHeight / 2
                }
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={controller.chord.size}
                fontWeight="bold"
                fill={controller.chord.fingerColor}
              >
                {fret.finger}
              </text>
            )}
            {to_barre !== undefined && from_barre !== undefined && (
              <g>
                <rect
                  x={
                    xlocation -
                    controller.chord.size +
                    controller.body.cellWidth * (6 - from_barre)
                  }
                  y={
                    ylocation -
                    controller.chord.size +
                    controller.body.cellHeight / 2 +
                    controller.body.cellHeight * min
                  }
                  width={
                    2 * controller.chord.size +
                    controller.body.cellWidth * (barre_length - 1)
                  }
                  height={controller.chord.size * 2}
                  rx="15"
                  fill={controller.chord.color}
                />
                {controller.chord.withFinger && (
                  <text
                    x={
                      (2 * controller.chord.size +
                        controller.body.cellWidth * (barre_length - 1)) /
                        2 +
                      xlocation -
                      controller.chord.size +
                      controller.body.cellWidth * (6 - from_barre)
                    }
                    y={ylocation + controller.body.cellHeight / 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={controller.chord.size}
                    fontWeight="bold"
                    fill={controller.chord.fingerColor}
                  >
                    {fret.finger}
                  </text>
                )}
              </g>
            )}
          </g>
        );
      })}
    </g>
  );
};

export default ChordLocation;
