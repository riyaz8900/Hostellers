import React from 'react';
import PropTypes from 'prop-types';

function Button({ text, iconSrc, iconAlt, onClick, className }) {
  return (
    <button className={className} onClick={onClick}>
      {iconSrc && (
        <span>
          <img src={iconSrc} alt={iconAlt || `${text} icon`} />
        </span>
      )}
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  iconSrc: PropTypes.string,
  iconAlt: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  iconSrc: null,
  iconAlt: '',
  onClick: () => {},
  className: '',
};

export default Button;