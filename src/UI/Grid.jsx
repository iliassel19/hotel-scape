import React from "react";

const Grid = (props) => {
  return (
    <div className="grid grid-cols-[repeat(10,1fr)] grid-rows-[15vh_auto_300px_repeat(7,auto)]">
      {props.children}
    </div>
  );
};

export default Grid;
