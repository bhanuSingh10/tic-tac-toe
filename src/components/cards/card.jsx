import React from "react";
import Icon from "../icons/icon";
import "./card.css";
import Grid from "../Grid/Grid";

export default function card({gameEnd, player, onPlay, index }) {
  let icon = <Icon />;
  if (player == "X") {
    icon = <Icon name="cross" />;
  } else if (player == "O") {
    icon = <Icon name="circle" />;
  }
  return (
    <div className="card" onClick={() =>!gameEnd && player=="" && onPlay(index)}>
      {icon}
    </div>
  );
}
