import React, { useState } from "react";

export default function SkinToneMixerApp() {
  const [color, setColor] = useState(null);

  const palette = [
    { r: 252, g: 238, b: 224 },
    { r: 247, g: 224, b: 199 },
    { r: 238, g: 206, b: 172 },
    { r: 230, g: 185, b: 145 },
    { r: 215, g: 164, b: 115 },
    { r: 199, g: 142, b: 90 },
    { r: 183, g: 120, b: 67 },
    { r: 167, g: 100, b: 48 },
    { r: 150, g: 81, b: 37 },
    { r: 133, g: 63, b: 28 },
    { r: 115, g: 48, b: 20 },
    { r: 97, g: 34, b: 14 },
    { r: 79, g: 21, b: 9 },
    { r: 61, g: 12, b: 5 },
    { r: 43, g: 7, b: 2 }
  ];

  const outputColors = {
    white: "#ffffff",
    yellow: "#f1c40f",
    red: "#c0392b",
    brown: "#8D5524",
    blue: "#3f00ff"
  };

  function getMix(color) {
    const index = palette.findIndex(
      (c) => c.r === color.r && c.g === color.g && c.b === color.b
    );

    const chart = [
      { white: 6, yellow: 3, red: 1, brown: 0, blue: 0 },
      { white: 5, yellow: 3, red: 1, brown: 1, blue: 0 },
      { white: 4, yellow: 3, red: 2, brown: 1, blue: 0 },
      { white: 3, yellow: 3, red: 2, brown: 2, blue: 0 },
      { white: 3, yellow: 2, red: 2, brown: 2, blue: 1 },
      { white: 2, yellow: 2, red: 2, brown: 3, blue: 1 },
      { white: 2, yellow: 2, red: 2, brown: 4, blue: 1 },
      { white: 1, yellow: 2, red: 2, brown: 4, blue: 1 },
      { white: 1, yellow: 1, red: 2, brown: 5, blue: 1 },
      { white: 1, yellow: 1, red: 2, brown: 6, blue: 1 },
      { white: 1, yellow: 1, red: 1, brown: 6, blue: 2 },
      { white: 0, yellow: 1, red: 1, brown: 6, blue: 2 },
      { white: 0, yellow: 0, red: 1, brown: 7, blue: 2 },
      { white: 0, yellow: 0, red: 1, brown: 8, blue: 2 },
      { white: 0, yellow: 0, red: 1, brown: 9, blue: 2 }
    ];

    return chart[Math.max(0, index)];
  }

  function getCircleSizes(mix) {
    const TOTAL_AREA = 30000;
    const values = Object.values(mix);
    const sum = values.reduce((a, b) => a + b, 0);
    return Object.fromEntries(
      Object.entries(mix).map(([k, _]) => {
        const area = (mix[k] / sum) * TOTAL_AREA;
        const radius = Math.sqrt(area / Math.PI);
        return [k, radius * 2];
      })
    );
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 60px)',
    gap: '0',
    justifyContent: 'center',
    marginBottom: '2rem'
  };

  const paletteItemStyle = (c) => ({
    backgroundColor: `rgb(${c.r},${c.g},${c.b})`,
    width: '60px',
    height: '100px',
    border: color && color.r === c.r && color.g === c.g && color.b === c.b ? '2px solid black' : 'none',
    boxSizing: 'border-box',
    cursor: 'pointer'
  });

  const backgroundStyle = {
    background: '#ffffff',
    minHeight: '100vh',
    padding: '1rem',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  return (
    <div style={backgroundStyle}>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>
        Northview Art Department Skin Tone Unmixer
      </div>

      <div style={{ marginBottom: '1rem', textAlign: 'center' }}>Tap on a skin tone to unmix.</div>

      <div style={gridStyle}>
        {palette.map((c, i) => (
          <div key={i} onClick={() => setColor(c)} style={paletteItemStyle(c)} />
        ))}
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center', marginBottom: '1rem' }}>Skin Tone Recipe</div>

      {color && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', minHeight: '140px' }}>
          {Object.entries(getMix(color))
            .filter(([_, v]) => v > 0)
            .map(([k, v], i) => {
              const sizes = getCircleSizes(getMix(color));
              return (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div
                    style={{
                      width: sizes[k] + 'px',
                      height: sizes[k] + 'px',
                      borderRadius: '50%',
                      border: k === 'white' ? '2px solid black' : '2px solid black',
                      backgroundColor: outputColors[k]
                    }}
                  ></div>
                  <div style={{ fontSize: '0.7rem', marginTop: '0.2rem', textAlign: 'center' }}>{v + ' parts'}</div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}