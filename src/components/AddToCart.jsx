import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  return (
    <>
      <div className="colors-div">
        <p className="color-txt">Colors :</p>
        <div className="color-btn-div">
          {colors.map((curColor, index) => (
            <button
              key={index}
              style={{ backgroundColor: curColor }}
              className={color === curColor ? 'color-btn active' : 'color-btn'}
              onClick={() => setColor(curColor)}
            >
              {color === curColor ? (
                <FaCheck className="check-icon" />
              ) : (
                <p style={{ color: curColor }}>.</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default AddToCart;
