import React, { useEffect } from 'react';

const Notification = ({ notifContent, notifType, closeNotif }) => {
  useEffect(() => {
    setTimeout(() => {
      closeNotif();
    }, 3000);

    document.querySelector('.modal').classList.add(notifType);
  }, [notifType]);
  return (
    <div className='modal'>
      <p>{notifContent}</p>
    </div>
  );
};

export default Notification;
