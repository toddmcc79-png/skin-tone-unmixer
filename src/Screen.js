import React from "react";
import { useNavigate } from "react-router-dom";
import "./Screen.css";

export default function Screen({ background, hotspots = [], children }) {
  const navigate = useNavigate();

  return (
    <div className="screen-outer">
      <div
        className="screen-frame"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        {hotspots.map((spot) => (
          <button
            key={spot.id}
            className="hotspot"
            style={{
              left: `${spot.x}%`,
              top: `${spot.y}%`,
              width: `${spot.w}%`,
              height: `${spot.h}%`,
            }}
            aria-label={spot.id}
            onClick={() => {
              if (spot.onClick) spot.onClick();
              if (spot.to) navigate(spot.to);
            }}
          />
        ))}

        {children}
      </div>
    </div>
  );
}
