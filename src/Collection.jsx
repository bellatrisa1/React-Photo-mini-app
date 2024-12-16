import React from "react";

export const Collection = ({ images, name }) => {

  if (!Array.isArray(images)) {
    return null;
  }

  return (
    <div className="collection">
      {images.length > 0 && (
        <img className="collection__big" src={images[0]} alt="Main" />
      )}
      <div className="collection__bottom">
        {images.slice(1, 4).map((img, idx) => (
          <img
            key={idx}
            className="collection__mini"
            src={img}
            alt={`Thumbnail ${idx + 1}`}
          />
        ))}
      </div>
      <h4>{name}</h4>
    </div>
  );
};
