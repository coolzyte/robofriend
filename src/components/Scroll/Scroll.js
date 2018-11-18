import React from "react";

const scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        height: "100%"
      }}
    >
      {children}
    </div>
  );
};

export default scroll;
