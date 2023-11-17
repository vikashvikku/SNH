import "./Gallery.css";
import React from "react";

const Gallery = () => {
  const imagePaths = Array.from(
    { length: 12 },
    (_, i) => `images/photo${i + 1}.webp`
  );

  const galleryItems = imagePaths.map((path, index) => (
    <div key={index} className="gallery-item">
      <img src={path} alt={`hospitalPhoto ${index + 1}`} />
      <p>Description for Photo {index + 1}</p>
    </div>
  ));

  return (
    <div className="gallery">
      <h2>Photo Gallery</h2>
      <div className="gallery-container">{galleryItems}</div>
    </div>
  );
};

export default Gallery;
