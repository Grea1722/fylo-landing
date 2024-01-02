import React from "react";
import { featureImages } from "./js/featuresImages";

const images = featureImages;
export const Features = () => {
  return (
    <div className="features">
      <ul>
        {images.map((image, index) => (
          <li key={index} className="card">
            <img src={image.src} alt={image.title} />
            <h3>{image.title}</h3>
            <p>{image.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
