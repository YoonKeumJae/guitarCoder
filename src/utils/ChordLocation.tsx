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
  const xlocation = controller.fretNumber.gap * 2 + controller.fretNumber.size;
  const ylocation =
    controller.chordTitle.height +
    controller.chordTitle.size +
    controller.string.gap +
    controller.string.size +
    controller.chord.gap +
    controller.body.cellHeight / 2;
  return (
    <g>
      {frets.map((fret, index) => {
        const to_barre = fret.barre?.to_string;
        const from_barre = fret.barre?.from_string;
        const barre_length =
          to_barre && from_barre ? from_barre - to_barre + 1 : 0;
        const min = fret.fret - starting;
        return (
          <g>
            <circle
              cx={xlocation + controller.body.cellWidth * (6 - fret.string)}
              cy={ylocation + controller.body.cellHeight * min}
              r={controller.chord.size}
              fill={controller.chord.color}
              key={`chord-${index}`}
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
                  controller.body.cellHeight * min
                }
                width={
                  xlocation + controller.body.cellWidth * (barre_length - 2)
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
