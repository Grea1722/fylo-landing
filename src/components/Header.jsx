import logo from "../assets/logo.svg";
export const Header = () => {
  return (
    <div className="navbar">
      <a href="/" className="logo">
        <img src={logo} alt="logo fylo" />
      </a>

      <section className="links">
        <a href="/features">Features</a>
        <a href="/team">Team</a>
        <a href="/sign">Sign In</a>
      </section>
    </div>
  );
};
