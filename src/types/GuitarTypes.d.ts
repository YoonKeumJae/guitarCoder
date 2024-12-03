export {};

declare global {
  // 코드 운지법의 줄 번호: Open(운지하지 않는 줄), Mute(치지 않는 줄), 공백 표시
  type StringState = {
    1: "Open" | "Mute" | null;
    2: "Open" | "Mute" | null;
    3: "Open" | "Mute" | null;
    4: "Open" | "Mute" | null;
    5: "Open" | "Mute" | null;
    6: "Open" | "Mute" | null;
  };

  // 코드 정보를 담은 객체
  type Chord = {
    code: string;
    capo: number; // 카포 사용 여부 (0: 사용하지 않음, 1~: 카포 번호)
  };

  // 기타 줄 번호
  type StringNumber = 1 | 2 | 3 | 4 | 5 | 6;

  // 손가락이 어디를 운지하는지에 대한 정보를 담은 객체
  type Finger =
    | {
        type: "barre";
        fret: number;
        line: Array<StringNumber>; // 줄 번호
      }
    | {
        type: "normal";
        fret: number;
        line: StringNumber; // 줄 번호
      };

  // 최종 코드 운지법을 담은 객체
  type Fingering = {
    chord: string; // 코드 이름
    fret: Array<number>; // 코드에서 사용하는 프랫 번호들의 배열
    string: StringState; // 코드에서 사용하는 줄 번호들 정보(null, O, X)를 담은 객체
    finger1: Finger;
    finger2: Finger;
    finger3: Finger;
    finger4: Finger;
  };
}
