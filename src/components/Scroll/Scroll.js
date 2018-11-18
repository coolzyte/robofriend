import React from "react";

const scroll = ({ children }) => {
  return (
    <div
      style={{
        overflow: "scroll",
        height: "100%"
      }}
    >
      {children}
    </div>
  );
};

export default scroll;
