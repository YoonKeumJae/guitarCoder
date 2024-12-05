const ExampleTemplate = () => {
  return (
    <svg width="240" height="310" xmlns="http://www.w3.org/2000/svg">
      <text
        x="120"
        y="40"
        font-family="Arial"
        font-size="40"
        fill="black"
        text-anchor="middle"
        dominant-baseline="middle"
      >
        Chord
      </text>
      {/* <!--empty line--> */}
      <circle
        cx="20"
        cy="80"
        r="10"
        fill="none"
        stroke="black"
        stroke-width="2"
        dominant-baseline="middle"
      />
      {/* <!--mute line--> */}
      <line x1="50" y1="70" x2="70" y2="90" stroke="black" stroke-width="2" />
      <line x1="70" y1="70" x2="50" y2="90" stroke="black" stroke-width="2" />
      {/* <!--줄--> */}
      <line x1="20" y1="100" x2="20" y2="300" stroke="black" stroke-width="2" />
      <line x1="60" y1="100" x2="60" y2="300" stroke="black" stroke-width="2" />
      <line
        x1="100"
        y1="100"
        x2="100"
        y2="300"
        stroke="black"
        stroke-width="2"
      />
      <line
        x1="140"
        y1="100"
        x2="140"
        y2="300"
        stroke="black"
        stroke-width="2"
      />
      <line
        x1="180"
        y1="100"
        x2="180"
        y2="300"
        stroke="black"
        stroke-width="2"
      />
      <line
        x1="220"
        y1="100"
        x2="220"
        y2="300"
        stroke="black"
        stroke-width="2"
      />
      {/* <!--0번--> */}
      <line
        x1="19"
        y1="100"
        x2="221"
        y2="100"
        stroke="black"
        stroke-width="5"
      />
      {/* <!--프렛--> */}
      <line
        x1="20"
        y1="100"
        x2="220"
        y2="100"
        stroke="black"
        stroke-width="1"
      />
      <line
        x1="20"
        y1="150"
        x2="220"
        y2="150"
        stroke="black"
        stroke-width="1"
      />
      <line
        x1="20"
        y1="200"
        x2="220"
        y2="200"
        stroke="black"
        stroke-width="1"
      />
      <line
        x1="20"
        y1="250"
        x2="220"
        y2="250"
        stroke="black"
        stroke-width="1"
      />
      <line
        x1="20"
        y1="300"
        x2="220"
        y2="300"
        stroke="black"
        stroke-width="1"
      />
      {/* <!--손가락 번호--> */}
      <circle cx="180" cy="125" r="15" fill="black" />
      <circle cx="60" cy="175" r="15" fill="black" />
      <circle cx="100" cy="175" r="15" fill="black" />
      {/* <!--Barret--> */}
      <rect x="5" y="210" width="230" height="30" rx="15" />
    </svg>
  );
};

export default ExampleTemplate;