import { ChordController } from "./ChordViewer";

interface ChordTableProps {
  controller: ChordController;
}

const ChordTable: React.FC<ChordTableProps> = ({ controller }) => {
  const xlocation = controller.chord.chordX;
  const ylocation = controller.chord.chordY;

  const colLine = () => {
    const lines = [];
    for (let i = 0; i < 6; i++) {
      lines.push(
        <line
          x1={xlocation + controller.body.cellWidth * i}
          y1={ylocation}
          x2={xlocation + controller.body.cellWidth * i}
          y2={
            ylocation + controller.body.cellHeight * controller.body.viewFrets
          }
          stroke={controller.body.color}
          strokeWidth="2"
          key={`col-line-${i}`}
        />
      );
    }
    return lines;
  };

  const rowLine = () => {
    const lines = [];
    for (let i = 0; i < controller.body.viewFrets + 1; i++) {
      lines.push(
        <line
          x1={xlocation}
          y1={ylocation + controller.body.cellHeight * i}
          x2={xlocation + controller.body.cellWidth * 5}
          y2={ylocation + controller.body.cellHeight * i}
          stroke={controller.body.color}
          strokeWidth="2"
          key={`row-line-${i}`}
        />
      );
    }
    return lines;
  };

  return (
    <g>
      {colLine()}
      {rowLine()}
    </g>
  );
};

export default ChordTable;
