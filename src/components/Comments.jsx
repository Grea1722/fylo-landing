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

      <section className="get-access">
        <h3>Get early access today</h3>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <section className="form">
          <input
            type="text"
            name="mail"
            id="mail"
            placeholder="email@example.com"
          />
          <button>Get Started For Free</button>
        </section>
      </section>
    </div>
  );
};
