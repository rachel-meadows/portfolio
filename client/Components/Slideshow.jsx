import React, { useState } from 'react';

function Slideshow( { data } ) {
  const images = [`/images/projects/${data.gallery[0]}`,
  `/images/projects/${data.gallery[1]}`,
  `/images/projects/${data.gallery[2]}`];

  const [index, setIndex] = useState(0);

  function updateIndex(itemIndex) {
    setIndex(itemIndex)
  }
  return (
    <div className="slideshow">
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