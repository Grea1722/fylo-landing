import React from "react";
import { comments } from "./js/comments";

const cards = comments;
export const Comments = () => {
  console.log(cards);
  return (
    <div className="comments">
      {cards.map((card, index) => (
        <li key={index} className="card">
          <p>{card.message}</p>
          <section className="user">
            <img src={card.src} alt={`Image for ${card.name} user`} />
            <section className="data">
              <h3>{card.name}</h3>
              <h4>{card.rol}</h4>
            </section>
          </section>
        </li>
      ))}
    </div>
  );
};
