export {};
declare global {
  // 타입 선언
  type Barre = {
    from_string: number; // 바레 시작 줄
    to_string: number; // 바레 끝 줄
  };

  type Fret = {
    string: number; // 기타 줄 번호
    fret: number; // 프렛 번호
    finger: number | null; // 손가락 번호 (null은 손가락 사용 안 함)
    barre?: Barre; // 바레 코드 정보 (optional)
  };

  type Chord = {
    name: string; // 코드 이름
    frets: Fret[]; // 운지 정보 배열
    description: string; // 코드 설명
    omit_strings?: number[]; // 연주하지 않는 줄 배열 (optional)
    open_strings?: number[]; // 개방현 배열 (optional)
  };

  type ChordData = {
    chords: Chord[]; // 모든 코드 데이터 배열
  };
}
