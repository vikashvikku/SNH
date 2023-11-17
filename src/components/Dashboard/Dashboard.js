import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "../../data";

const Dashboard = () => {
  const [photos, setPhotos] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = photos.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, photos]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="dash">
      <section className="section">
        <h1 className="title-heading">Swarnakamal Nursing Home</h1>

        <div className="section-center">
          {photos.map((person, personIndex) => {
            const { id, image, head, text } = person;
            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === photos.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article className={position} key={id}>
                <img src={image} alt="OS" className="os-img" />
                <div className="title">{head}</div>
                <p className="text">{text}</p>
              </article>
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
