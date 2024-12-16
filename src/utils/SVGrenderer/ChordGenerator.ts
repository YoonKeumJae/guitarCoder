import ChordData from "../../ChordData.json";
/**
 *
 * @param {string} chordName Chord's name to generate
 * @returns {Chord} Chord's data object
 */
const ChordGenerator = (chordName: string): Chord => {
  const chordData = ChordData.chords.find(
    (chord) => chord.chordInfo.name === chordName
  );
  if (!chordData) {
    throw new Error(`Chord ${chordName} not found`);
  }
  return chordData;
};

export default ChordGenerator;
