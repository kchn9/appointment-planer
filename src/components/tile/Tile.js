import React from "react";

export const Tile = ({object}) => {

  const keys = Object.keys(object);

  return (
    <div className="tile-container">
      {keys.map((key, idx) => {
        const className = idx === 0 ? 'tile-title' : 'tile';
        return <p key={idx} className={className}>{object[key]}</p>
      })}
    </div>
  );
};
