import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMusic } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <ul className='navigation'>
      <li className='link'>
        <FontAwesomeIcon icon={faHome} size='2x' />
      </li>
      <li className='link-active'>
        <FontAwesomeIcon icon={faMusic} size='2x' />
      </li>
    </ul>
  );
};

export default Navigation;
