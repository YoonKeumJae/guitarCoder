import { ChordController } from "../ChordViewr";

interface FretNumberProps {
  startFret: number;
  controller: ChordController;
}

const FretNumber: React.FC<FretNumberProps> = ({ startFret, controller }) => {
  const xlocation = controller.fretNumber.fretNumberX;
  const ylocation = controller.chord.chordY + controller.body.cellHeight / 2;

  const fretRenderer = () => {
    const texts = [];
    for (let i = 0; i < controller.body.viewFrets; i++) {
      texts.push(
        <text
          key={i}
          fontSize={controller.fretNumber.size}
          x={xlocation}
          y={ylocation + controller.body.cellHeight * i}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={controller.fretNumber.color}
        >
          {startFret + i}
        </text>
      );
    }
    return texts;
  };

  return <g>{controller.fretNumber.view ? fretRenderer() : null} </g>;
};

export default FretNumber;
