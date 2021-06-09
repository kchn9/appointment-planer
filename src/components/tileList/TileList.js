import React from "react";

import { Tile } from "../tile/Tile";

export const TileList = ({objectsArray}) => {

  return (
    <div>
      {objectsArray.map((object, idx) => <Tile key={idx} object={object} /> )}
    </div>
  );
};
