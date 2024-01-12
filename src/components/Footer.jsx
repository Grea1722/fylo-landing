import logo from "../assets/logo.svg";
import dirIcon from "../assets/icon-location.svg";
import tel from "../assets/icon-phone.svg";
import email from "../assets/icon-email.svg";
import { links } from "./js/links";

const enlaces = links;

export const Footer = () => {
  return (
    <div className="footer">
      <section className="logo">
        <img src={logo} alt="Fylo logo" />
      </section>
      <div className="info">
        <section className="info-content">
          <img src={dirIcon} alt="Icon direccion" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </section>
        <section className="contact">
          <div className="info-content">
            <img src={tel} alt="telephone icon" />
            <p>+1-543-123-4567</p>
          </div>
          <div className="info-content">
            <img src={email} alt="email icon" />
            <p>example@fylo.com</p>
          </div>
        </section>
        <section className="links">
          {enlaces.map((enlace, index) => (
            <a href="/" key={index}>
              {enlace}
            </a>
          ))}
        </section>
      </div>
    </div>
  );
};
