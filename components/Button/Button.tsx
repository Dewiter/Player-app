import React, { MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faSearch,
  faForward,
  faBackward,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';

interface ButtonType {
  content: String;
  customClass: String;
  onclick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = React.forwardRef(
  ({ content, customClass, onclick }: ButtonType) => {
    const getContent = (current: String) => {
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
      <button className={`btn ${customClass}`} onClick={onclick}>
        {getContent(content)}
      </button>
    );
  }
);

export default Button;
