import { ChordController } from "../ChordViewr";

interface FretNumberProps {
  startFret: number;
  controller: ChordController;
}

const FretNumber: React.FC<FretNumberProps> = ({ startFret, controller }) => {
  const xlocation = controller.fretNumber.gap;
  const ylocation =
    controller.chordTitle.height +
    controller.chordTitle.size +
    controller.string.gap +
    controller.string.size +
    controller.chord.gap +
    controller.body.cellHeight / 2;

  return (
    <g>
      {controller.fretNumber.view ? (
        <g>
          <text
            fontSize={controller.fretNumber.size}
            x={xlocation}
            y={ylocation}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={controller.fretNumber.color}
          >
            {startFret}
          </text>
          <text
            fontSize={controller.fretNumber.size}
            x={xlocation}
            y={ylocation + controller.body.cellHeight}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={controller.fretNumber.color}
          >
            {startFret + 1}
          </text>
          <text
            fontSize={controller.fretNumber.size}
            x={xlocation}
            y={ylocation + controller.body.cellHeight * 2}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={controller.fretNumber.color}
          >
            {startFret + 2}
          </text>
          {controller.body.viewFrets === 4 ? (
            <text
              fontSize={controller.fretNumber.size}
              x={xlocation}
              y={ylocation + controller.body.cellHeight * 3}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={controller.fretNumber.color}
            >
              {startFret + 3}
            </text>
          ) : null}
        </g>
      ) : null}{" "}
    </g>
  );
};

export default FretNumber;
