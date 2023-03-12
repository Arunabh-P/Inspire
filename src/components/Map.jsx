import React from 'react';

const Map = () => {
  return (
    <div className="map-div mt-5">
      <iframe
        title="its location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62651.0384576719!2d76.03337210569212!3d11.061859684744068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64a9be29b058f%3A0x23e371e0d4c30d8e!2sMalappuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1678590367603!5m2!1sen!2sin"
        className="map-frame"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen=""
      />
    </div>
  );
};

export default Map;
