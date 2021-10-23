import React, { useEffect } from 'react';

const Notification = ({ notifContent, notifType, closeNotif }) => {
  useEffect(() => {
    setTimeout(() => {
      closeNotif();
    }, 3000);
  }, [closeNotif]);

  return (
    <div className={`modal ${notifType}`}>
      <p>{notifContent}</p>
    </div>
  );
};

export default Notification;
