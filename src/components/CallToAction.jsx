import stayIllus from "../assets/illustration-stay-productive.png";
import arrowIcon from "../assets/icon-arrow.svg";

export const CallToAction = () => {
  return (
    <div className="callto">
      <img src={stayIllus} alt="Illustration stay productive" />
      <section className="text">
        <h3>Stay productive, wherever you are</h3>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>

        <a href="/">
          See how Fylo works
          <img src={arrowIcon} alt="arrowIcon" />
        </a>
      </section>
    </div>
  );
};
