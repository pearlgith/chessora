import React from "react";

const Modal = ({ meme, onClose, onPrevious, onNext }) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close' onClick={onClose}>
          &times;
        </span>
        <img src={meme.image} alt='Selected Meme' />
        <div className='meme-details'>
          <p>
            {meme.date} {meme.time}
          </p>
        </div>
        <div className='navigation-buttons'>
          <button onClick={onPrevious}>&lt;</button>
          <button onClick={onNext}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
