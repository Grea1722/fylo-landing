import ilustracionIntro from "../assets/illustration-intro.png";

export const Hero = () => {
  return (
    <div className="header">
      <img src={ilustracionIntro} alt="intro ilustration" />
      <section className="text">
        <h2>All your files in one secure location, accessible anywhere</h2>
        <p>Fylo stores all your most important files in one secure location.</p>
        <p>
          Access them wherever you need, share and collaborate with friends,
          family and co-workers.
        </p>
      </section>
      <button>Get Started</button>
    </div>
  );
};
