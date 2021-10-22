import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faSearch,
  faForward,
  faBackward,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';

const Button = React.forwardRef(({ content, onclick, customClass }, ref) => {
  const getContent = (current) => {
    switch (current) {
      case 'play':
        return <FontAwesomeIcon icon={faPlay} />;
      case 'pause':
        return <FontAwesomeIcon icon={faPause} />;
      case 'forward':
        return <FontAwesomeIcon icon={faForward} />;
      case 'backward':
        return <FontAwesomeIcon icon={faBackward} />;
      case 'search':
        return <FontAwesomeIcon icon={faSearch} />;
      case 'plus-circle':
        return <FontAwesomeIcon icon={faPlusCircle} />;
      default:
        break;
    }
  };

  return (
    <button
      ref={ref}
      className={`btn btn-not-pressed ${customClass}`}
      onClick={onclick}
    >
      {getContent(content)}
    </button>
  );
});

export default Button;
