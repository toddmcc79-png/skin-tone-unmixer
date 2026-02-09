import React, { useState, useEffect } from "react";

export default function StarRating({ x, y, w, h }) {
  const [rating, setRating] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("rating");
    if (saved) setRating(Number(saved));
  }, []);

  const handleRate = (value) => {
    setRating(value);
    localStorage.setItem("rating", value);
  };

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        width: `${w}%`,
        height: `${h}%`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        pointerEvents: "auto",
      }}
    >
      {[1, 2, 3, 4, 5].map((value) => (
        <button
          key={value}
          onClick={() => handleRate(value)}
          aria-label={`Rate ${value} stars`}
          style={{
            background: "none",
            border: "none",
            fontSize: "32px",
            cursor: "pointer",
            color: rating >= value ? "#FFD700" : "#999",
          }}
        >
          ★
        </button>
      ))}
    </div>
  );
}
