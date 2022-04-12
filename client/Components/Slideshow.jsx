import React, { useState } from 'react';

function Slideshow( { data } ) {
  const images = [`/images/projects/${data.gallery[0]}`,
  `/images/projects/${data.gallery[1]}`,
  `/images/projects/${data.gallery[2]}`];

  const [index, setIndex] = useState(0);

  function updateIndex(itemIndex) {
    setIndex(itemIndex)
  }

  function decreaseIndex() {
    if (index === 0) {
      // If index is already at the start, go to the end
      setIndex(images.length - 1)
    } else {
      setIndex(index - 1)
    }
  }
  
  function increaseIndex() {
    if (index === images.length - 1) {
      // If index is already at the end, go to the start
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  return (
    <div className="slideshow">

      <a className="prev" onClick={() => {
            decreaseIndex();
          }}>&#10094;</a>
      <a className="next" onClick={() => {
            increaseIndex();
          }}>&#10095;</a>

      <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {images.map((image, index) => (
          <div className="slide" key={index} style={{ backgroundImage: `url(${image})` }}/>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((item, itemIndex) => (
          <div className={`slideshowDot${itemIndex === index ? " active" : ""}`} 
          key={itemIndex}
          onClick={() => {
            updateIndex(itemIndex);
          }}></div>
        ))}
      </div>

    </div>
  );
}

export default Slideshow