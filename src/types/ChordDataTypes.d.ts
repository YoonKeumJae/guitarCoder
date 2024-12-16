export {};
declare global {
  // 모든 코드 데이터 배열
  type ChordData = {
    chords: Chord[];
  };
  // 코드 데이터 타입
  type Chord = {
    renderingInfo: renderingInfo;
    stringInfo: stringInfo;
    chordInfo: chordInfo;
  };
  // 초기 렌더링에 필요한 정보
  type renderingInfo = {
    usingFret: number; // 사용하는 프렛의 갯수 (렌더링 시 최소한으로 보여줄 프렛 갯수, 3 또는 4로 예상됨)
    startingFret: number; // 시작 프렛 번호
  };
  // open string, omit string 표시 정보 [optional]
  type stringInfo = {
    openStrings?: number[]; // 개방현 배열
    omitStrings?: number[]; // 연주하지 않는 줄 배열
  };
  // 코드 정보
  type chordInfo = {
    name: string; // 코드 이름
    description: string; // 코드 설명
    frets: Fret[]; // 운지 정보 배열
  };
  // 운지 정보
  type Fret = {
    string: number; // 기타 줄 번호
    fret: number; // 프렛 번호
    finger: number; // 손가락 번호 
    barre?: Barre; // 바레 코드 정보 (optional)
  };
  // 바레 코드 정보
  type Barre = {
    from_string: number; // 바레 시작 줄
    to_string: number; // 바레 끝 줄
  };
}
