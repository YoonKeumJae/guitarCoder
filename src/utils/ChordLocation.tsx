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
            <circle
              cx={xlocation + controller.body.cellWidth * (6 - fret.string)}
              cy={
                ylocation +
                controller.body.cellHeight * min +
                controller.body.cellHeight / 2
              }
              r={controller.chord.size}
              fill={controller.chord.color}
            />
            {to_barre !== undefined && from_barre !== undefined && (
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
            )}
          </g>
        );
      })}
    </g>
  );
};

export default ChordLocation;
