import React from "react";
import "./Card.scss";

const card = ({ id, name, email }) => {
  return (
    <div className="Card">
      <div className="Card__Image">
        <img src={`https://robohash.org/${id}?200x200`} alt="" />
      </div>
      <div className="Card__Content">
        <h2 className="Card__Title">{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default card;
